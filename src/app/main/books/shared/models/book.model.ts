export interface Book {
  id: number;
  title: string;
  subtitle: string | null;
  publishDate: Date;
  originallyPublishedYear: number;
  seriesTitle: string | null;
  pageCount: number;
  description: string;
  authorFullName: string;
  createDateUtc: Date;
}
