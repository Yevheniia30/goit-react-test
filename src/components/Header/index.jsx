import PropTypes from "prop-types";

const Header = (props) => {
  const { someNumber, userName, age } = props;

  return (
    <div>
      {/* --------- рендер по условию--------- */}
      {/* тернарник */}
      {someNumber > 10 ? (
        <h1>Hello From React {someNumber} </h1>
      ) : (
        <p>Hello {userName}!</p>
      )}
      {/* оператор && если условие не выполн то разметка не рендерится */}
      {age < 18 && <p>Not 18 years old yet! </p>}
    </div>
  );
};

Header.propTypes = {
  someNumber: PropTypes.number.isRequired,
};

Header.defaultProps = {
  someNumber: 0,
  userName: "User",
};

export default Header;
