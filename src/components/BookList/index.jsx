import PropTypes from "prop-types";
import BookItem from "./BookItem";
// import BookItem from "components/BookItem";

const BookList = ({ title, books }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // title: PropTypes.string.isRequired,
      // author: PropTypes.string.isRequired,
      // price: PropTypes.number.isRequired,
    })
  ),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
