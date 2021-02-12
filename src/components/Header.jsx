import PropTypes from "prop-types";

const Header = (props) => {
  const { someNumber, userName } = props;

  return (
    <div>
      <h1>Hello From React {someNumber} </h1>
      <p>Hello {userName}!</p>
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
