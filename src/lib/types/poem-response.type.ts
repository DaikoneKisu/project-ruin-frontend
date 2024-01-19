export interface PoemResponse {
  authors: string[]
  genre: string
  title: string
  description: string
  subject: string
  originalLanguage: string
  elaborationStartDate: Date
  elaborationEndDate: Date
  elaborationPlaces: Date[]
  poemText: string
  id: string
  poemType: string
  stanzasTypes: string[]
  rhymes: string[]
  verseLength: number
}
