import "./styles.css";
import HomePage from "../../pages/HomePage";
import UsersPage from "../../pages/UsersPage";
import AboutPage from "../../pages/AboutPage";
import BooksPage from "../../pages/BooksPage";
import TestPage from "../../pages/TestPage";
import UserDetailPage from "../../pages/UserDetailPage";
import UserDetailHooks from "../../pages/UserDetailHooks";
import CountersPage from "../../pages/CountersPage";

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {/* <h1 className="title">Some Page</h1> */}
      {/* <h2>{pathname}</h2> */}
      {pathname === "/home-page" && <HomePage />}
      {pathname === "/users-page" && <UsersPage />}
      {pathname === "/about-page" && <AboutPage />}
      {pathname === "/books-page" && <BooksPage />}
      {pathname === "/test-page" && <TestPage />}
      {pathname === "/userdetail-page" && <UserDetailPage />}
      {pathname === "/userdetailhooks-page" && <UserDetailHooks />}
      {pathname === "/counters-page" && <CountersPage />}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        assumenda deleniti accusantium facere officia deserunt consequuntur
        molestias eligendi iste. Sunt tempore, totam dolorem commodi esse odio
        magni ab placeat ipsum.
      </p> */}
    </div>
  );
};

export default Content;
