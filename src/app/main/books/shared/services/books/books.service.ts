import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';

const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    subtitle: '',
    originallyPublishedYear: 1925,
    genreIds: [1],
    seriesTitle: null,
    pageCount: 218,
    tagsIds: [1, 5],
    description:
      'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.',
    authorFullName: 'Francis Scott Fitzgerald',
  },
  {
    id: 2,
    title: 'Great Expectations',
    subtitle: '',
    originallyPublishedYear: 1860,
    genreIds: [1],
    seriesTitle: null,
    pageCount: 432,
    tagsIds: [1],
    description:
      'Great Expectations is the thirteenth novel by Charles Dickens and his penultimate completed novel, which depicts the education of an orphan nicknamed Pi',
    authorFullName: 'Charles Dickens',
  },
  {
    id: 3,
    title: 'One Hundred Years of Solitude',
    subtitle: '',
    originallyPublishedYear: 1967,
    genreIds: [6],
    seriesTitle: null,
    pageCount: 432,
    tagsIds: [1, 3],
    description:
      'One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family.',
    authorFullName: 'Gabriel Garcia Marque',
  },
  {
    id: 4,
    title: 'Dune',
    subtitle: '',
    originallyPublishedYear: 1965,
    genreIds: [8],
    seriesTitle: null,
    pageCount: 412,
    tagsIds: [1, 3],
    description:
      'Dune is a 1965 science-fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelaznys This Immortal for the Hugo Award in 1966, and it won the inaugural Nebula Award for Best Novel.',
    authorFullName: 'Frank Herbert',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    subtitle: '',
    originallyPublishedYear: 1813,
    genreIds: [8],
    seriesTitle: null,
    pageCount: 380,
    tagsIds: [1, 7],
    description:
      'The book is narrated in free indirect speech following the main character Elizabeth Bennet as she deals with matters of upbringing, marriage, moral rightness and education in her aristocratic society.',
    authorFullName: 'Jane Austen',
  },
];

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Book[] {
    return books;
  }
}
