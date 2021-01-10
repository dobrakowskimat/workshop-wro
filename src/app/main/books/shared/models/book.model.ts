export interface Book {
  id: number;
  title: string;
  subtitle: string | null;
  originallyPublishedYear: number;
  genreIds: number[];
  seriesTitle: string | null;
  pageCount: number;
  tagsIds: number[];
  description: string;
  authorFullName: string;
}
