const Users = [
  {
    id: 1,
    name: "Claude Sortwell",
    email: "c.s@gmail.com",
    password: "demo",
    image: require("../assets/user_icon.png"),
    listingIds: [1, 3, 5]
  }
];

export const validateUser = ({ email, password }) => {
  return Users.find((value) => value.email === email && value.password === password);
};

export const getUser = (email, userID) => {
  return Users.find((value) => value.email === email || value.id === userID);
};
