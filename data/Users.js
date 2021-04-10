const Users = [
  {
    id: 1,
    name: "Matt Smith",
    email: "demo@gmail.com",
    password: "demo",
    image: require("../assets/user_icon.png")
  },
  {
    id: 2,
    name: "David Smith",
    email: "demo2@gmail.com",
    password: "demo",
    image: require("../assets/user_2.png")
  }
];

export const validateUser = ({ email, password }) => {
  return Users.find((value) => value.email === email && value.password === password);
};

export const getUser = (email, userID) => {
  return Users.find((value) => value.email === email || value.id === userID);
};
