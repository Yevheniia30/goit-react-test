import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  link: {
    display: "block",
    color: "#000000",
    textDecoration: "none",
    padding: 10,

    "&:hover": {
      color: "#fff",
      backgroundColor: "#808080",
    },
  },
  activeLink: {
    color: "#fff",
    backgroundColor: "#752080",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#360f3b",
    },
  },
});

const NavLink = ({ path, label }) => {
  const classes = useStyles();
  const { pathname } = window.location;

  return (
    <a
      className={[
        classes.link,
        pathname === path ? classes.activeLink : "",
      ].join(" ")}
      href={path}
    >
      {label}
    </a>
  );
};

export default NavLink;
