const CHANNEL_NAME = 'spaceradio-listener-presence'
const HEARTBEAT_MS = 4000
const SESSION_TTL_MS = 12000

type PresenceMessage =
  | { type: 'ping'; id: string; ts: number }
  | { type: 'leave'; id: string }

let channel: BroadcastChannel | null = null
let sessionId = ''
let heartbeatTimer: ReturnType<typeof setInterval> | null = null
let listening = false
let onCountChange: ((count: number) => void) | null = null
const sessions = new Map<string, number>()

function pruneSessions(now = Date.now()): void {
  for (const [id, ts] of sessions) {
    if (now - ts > SESSION_TTL_MS) {
      sessions.delete(id)
    }
  }
}

function activeListenerCount(): number {
  pruneSessions()
  return sessions.size
}

function notifyCount(): void {
  onCountChange?.(activeListenerCount())
}

function post(message: PresenceMessage): void {
  channel?.postMessage(message)
}

function heartbeat(): void {
  if (!listening || !sessionId) return
  const ts = Date.now()
  sessions.set(sessionId, ts)
  post({ type: 'ping', id: sessionId, ts })
  notifyCount()
}

function handleMessage(event: MessageEvent<PresenceMessage>): void {
  const message = event.data
  if (!message?.id) return

  if (message.type === 'ping') {
    sessions.set(message.id, message.ts ?? Date.now())
    pruneSessions()
    notifyCount()
    return
  }

  if (message.type === 'leave') {
    sessions.delete(message.id)
    notifyCount()
  }
}

export function initListenerPresence(onChange: (count: number) => void): void {
  if (channel) {
    onCountChange = onChange
    notifyCount()
    return
  }

  onCountChange = onChange
  sessionId = crypto.randomUUID()

  if (typeof BroadcastChannel === 'undefined') {
    onChange(listening ? 1 : 0)
    return
  }

  channel = new BroadcastChannel(CHANNEL_NAME)
  channel.onmessage = handleMessage

  heartbeatTimer = setInterval(() => {
    if (listening) heartbeat()
    else pruneSessions()
    notifyCount()
  }, HEARTBEAT_MS)

  window.addEventListener('beforeunload', leaveListenerPresence)
  window.addEventListener('pagehide', leaveListenerPresence)

  notifyCount()
}

export function setListenerPresenceActive(active: boolean): void {
  if (active === listening) return
  listening = active

  if (!sessionId) {
    sessionId = crypto.randomUUID()
  }

  if (active) {
    heartbeat()
    return
  }

  sessions.delete(sessionId)
  post({ type: 'leave', id: sessionId })
  notifyCount()
}

export function leaveListenerPresence(): void {
  if (!sessionId) return
  listening = false
  sessions.delete(sessionId)
  post({ type: 'leave', id: sessionId })
  notifyCount()
}

export function disposeListenerPresence(): void {
  leaveListenerPresence()

  if (heartbeatTimer) {
    clearInterval(heartbeatTimer)
    heartbeatTimer = null
  }

  channel?.close()
  channel = null
  onCountChange = null
  sessions.clear()
}

export function formatListenerCount(count: number): string {
  return `${count} listener${count === 1 ? '' : 's'}`
}
