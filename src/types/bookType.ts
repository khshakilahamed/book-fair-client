export interface IReviews {
  review: string;
  _id: string;
  user: {
    _id: string;
    name?: string;
    email: string;
  };
}

export interface IBook {
  _id: string;
  title: string;
  genre: string;
  publicationDate: string;
  author: string;
  price: number;
  image: string;
  reviews?: { userId: string; review: string }[];
}

export interface IPostReview {
  id: string;
  data: {
    review: string;
  };
}
