export interface TableData {
  caption?: string
  headers: string[]
  rows: string[][]
}

export interface ChartBar {
  label: string
  value: number
  unit?: string
  display?: string
}

export interface ChartData {
  caption?: string
  bars: ChartBar[]
  maxValue?: number
}

export interface WhitepaperSection {
  id: string
  title: string
  paragraphs?: string[]
  table?: TableData
  chart?: ChartData
  callout?: string
}

export interface OrchardWhitepaper {
  slug: string
  number: number
  title: string
  subtitle: string
  version: string
  abstract: string
  heroImage: string
  heroImageAlt: string
  sections: WhitepaperSection[]
  references?: string
  relatedSlugs: string[]
}
