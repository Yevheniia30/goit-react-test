import "./styles.css";

const Navigation = () => {
  return (
    <div className="nav">
      <a className="link" href="/home-page">
        HOME
      </a>
      <a className="link" href="/users-page">
        USERS
      </a>
      <a className="link" href="/books-page">
        BOOKS
      </a>
      <a className="link" href="/about-page">
        ABOUT
      </a>
      <a className="link" href="/test-page">
        TEST
      </a>
    </div>
  );
};

export default Navigation;
