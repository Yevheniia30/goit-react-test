// import "./styles.css";
import NavLink from "./NavLink";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  nav: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: (x) => {
      return x === 5 ? "20px" : "0px";
    },
    padding: 10,
    borderRight: "1px solid #000000",
  },
});

const Navigation = () => {
  const x = 5;
  const classes = useStyles(x);

  // определяем активную страницу и присваиваем ей класс active-link
  // const { pathname } = window.location;

  // console.log(classes);
  return (
    <div className={classes.nav}>
      <NavLink path="/home-page" label="HOME" />
      <NavLink path="/users-page" label="USERS" />
      <NavLink path="/books-page" label="BOOKS" />
      <NavLink path="/about-page" label="ABOUT" />
      <NavLink path="/test-page" label="TEST" />
      <NavLink path="/userdetail-page" label="USERDETAILPAGE" />
      <NavLink path="/userdetailhooks-page" label="USERDETAILHOOKS" />
      <NavLink path="/counters-page" label="COUNTERSPAGE " />
    </div>
  );
};

export default Navigation;
