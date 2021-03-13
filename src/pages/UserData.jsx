const UserData = ({ user }) => {
  const { firstName, lastName, age, email } = user;
  return (
    <div>
      <p className="user__info">Firstname:{firstName}</p>
      <p className="user__info">Lastname: {lastName}</p>
      <p className="user__info">Age: {age}</p>
      <p className="user__info">Email: {email}</p>
    </div>
  );
};

export default UserData;
