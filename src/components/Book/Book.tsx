import { IBook } from "../../types/bookType";

const Book = ({ bookDetails }: IBook) => {
  const { title, genre, publicationDate, author, price, image } = bookDetails;
  return (
    <div>
      <div>
        <img src={image} alt="bookImage" />
      </div>
      <div>
        <p>{genre}</p>
        <h2>{title}</h2>
        <p>
          <span>By</span> {author}
        </p>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default Book;
