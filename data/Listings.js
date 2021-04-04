export const Listings = [
  {
    id: 1,
    name: "MiCho",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    locality: "Chinese",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing1.jpg"),
    stars: 5,
    userId: 1
  },
  {
    id: 2,
    name: "The Best American Burgers",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    locality: "Italian",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing2.jpg"),
    stars: 4.5,
    userId: 1
  },
  {
    id: 3,
    name: "Wine and Dine",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    locality: "American",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing3.jpg"),
    stars: 0.5,
    userId: 1
  },
  {
    id: 4,
    name: "LoHotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    category: "Hotel",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing4.jpg"),
    stars: 2,
    userId: 1
  },
  {
    id: 5,
    name: "The Zoo",
    category: "Tourism",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing5.jpg"),
    stars: 3,
    userId: 1
  },
  {
    id: 6,
    name: "MiCho",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    locality: "Chinese",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing1.jpg"),
    stars: 5,
    userId: 1
  },
  {
    id: 7,
    name: "The Best American Burgers",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    locality: "Italian",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing2.jpg"),
    stars: 4.5,
    userId: 1
  },
  {
    id: 8,
    name: "Wine and Dine",
    category: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    locality: "American",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing3.jpg"),
    stars: 0.5,
    userId: 1
  },
  {
    id: 9,
    name: "LoHotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    category: "Hotel",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing4.jpg"),
    stars: 2,
    userId: 1
  },
  {
    id: 10,
    name: "The Zoo",
    category: "Tourism",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    address: "7 Rumsey Cresncent Dundas Valley",
    image: require("../assets/listing5.jpg"),
    stars: 3,
    userId: 1
  }
];

export function getListings(array) {
  return Listings.filter(({ id }) => array.includes(id));
}
