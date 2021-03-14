import { useState } from "react";
import UserData from "./UserData";

const UserDetailHooks = () => {
  const [user, setUser] = useState({
    firstName: "Yevheniia",
    lastName: "Suska",
    age: 25,
    email: "susskaya86@gmail.com",
    hello: 0,
    inputValue: "1234567",
  });

  const handleInputChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      inputValue: event.target.value,
    }));
  };

  const handleBtnClick = () => {
    setUser((prevState) => ({
      ...prevState,
      age: prevState.age + 1,
    }));
  };

  //   const { firstName, lastName, age, email, inputValue } = user;

  return (
    <div className="user__details">
      <h1 className="user__title">User Details</h1>
      <UserData user={user} />
      <input type="text" onChange={handleInputChange} value={user.inputValue} />
      {/* <p>Hello: {}</p> */}
      <button type="button" className="user__btn" onClick={handleBtnClick}>
        Load User Data
      </button>
      <p>Hello: {user.inputValue}</p>
    </div>
  );
};

export default UserDetailHooks;
