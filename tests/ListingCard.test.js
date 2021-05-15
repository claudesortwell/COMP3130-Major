import React from "react";
import renderer from "react-test-renderer";
import ListingCard from "../components/ListingCard";

// test("Listing Card Renders", () => {
//   const json = renderer.create(<ListingCard />).toJson();
//   console.log(json);
// });

jest.mock("@expo/vector-icons");

describe("<Listing Card/>", () => {
  const card = renderer.create(
    <ListingCard
      data={{
        name: "McDonald's Sydney",
        address: "135 John Street",
        image: require("../assets/listing1.jpg"),
        category: "Hotel",
        locality: "American",
        stars: 4
      }}
      navigation={{}}
    ></ListingCard>
  );

  const cardDifferent = renderer.create(
    <ListingCard
      data={{
        name: "McDonald's Apple Sydney",
        address: "136 John Street",
        image: require("../assets/listing2.jpg"),
        category: "Tourism",
        locality: "Korean",
        stars: 2.5
      }}
      navigation={{}}
    ></ListingCard>
  );

  const cardEmptyFragment = renderer.create(<ListingCard data={{ name: "" }} navigation={{}}></ListingCard>);

  it("Renders correctly", () => {
    expect(card).toMatchSnapshot();
  });

  it("Renders different data correctly", () => {
    expect(cardDifferent).toMatchSnapshot();
  });

  it("Renders empty fragment if missing data", () => {
    expect(cardEmptyFragment).toMatchSnapshot();
  });
});
