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

export interface IResponseQuery {
  statusCode: number;
  data: {
    errorMessages: {
      path: string;
      message: string;
    }[];
    stack: string;
  };
  success: boolean;
  message: string;
}

export interface IWishlist {
  _id: string;
  user:
    | {
        _id: string;
        name: string;
        email: string;
      }
    | string;
  book: {
    _id: string;
    title: string;
    genre: string;
    publicationDate: string;
    author: string;
    price: number;
    image: string;
    reviews?: { userId: string; review: string }[];
  };
}
