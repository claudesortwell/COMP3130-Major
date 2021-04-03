const Users = [
  {
    name: "Claude Sortwell",
    email: "c.s@gmail.com",
    password: "demo"
  }
];

export const validateUser = ({ email, password }) => {
  return Users.filter((value) => value.email === email && value.password === password).length > 0;
};
