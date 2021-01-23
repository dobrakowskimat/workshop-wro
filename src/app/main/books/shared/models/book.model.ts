export interface BookPayload {
  title: string;
  subtitle: string | null;
  originallyPublishedYear: number;
  seriesTitle: string | null;
  pageCount: number;
  description: string;
  authorFullName: string;
  publishDate: Date;
  price: number
}

export interface Book extends BookPayload {
  id: string;
}
