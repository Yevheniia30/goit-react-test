import PropTypes from "prop-types";

const BookItem = ({ book: { title, author, price } }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{price}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tenetur
        ea reprehenderit eum voluptatum optio! Fugit distinctio maiores fugiat
        veritatis nesciunt modi temporibus, laborum, officia omnis deleniti,
        tempore enim eveniet.
      </p>
    </li>
  );
};
BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default BookItem;
