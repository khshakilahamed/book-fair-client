export interface IBook {
  id: number;
  title: string;
  genre: string;
  publicationDate: string;
  author: string;
  price: number;
  image: string;
  reviews?: { userId: string; review: string }[];
}
