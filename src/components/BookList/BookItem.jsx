const BookItem = ({ book }) => {
  return (
    <li>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.price}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam tenetur
        ea reprehenderit eum voluptatum optio! Fugit distinctio maiores fugiat
        veritatis nesciunt modi temporibus, laborum, officia omnis deleniti,
        tempore enim eveniet.
      </p>
    </li>
  );
};

export default BookItem;
