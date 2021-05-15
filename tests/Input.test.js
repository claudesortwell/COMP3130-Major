import React from "react";
import renderer from "react-test-renderer";
import { Input } from "../components/Input";
jest.mock("@expo/vector-icons");

describe("<Input />", () => {
  it("Renders Basic input", () => {
    const renderInput = renderer.create(
      <Input
        keyboardType={"email-address"}
        label={"Email"}
        autoCapitalize="none"
        placeholder={"Enter your account email address"}
        whiteLabel={true}
      />
    );

    expect(renderInput).toMatchSnapshot();
  });

  it("Input without white label enabled", () => {
    const renderInput = renderer.create(
      <Input
        keyboardType={"email-address"}
        label={"Email"}
        autoCapitalize="none"
        placeholder={"Enter your account email address"}
        whiteLabel={false}
      />
    );

    expect(renderInput).toMatchSnapshot();
  });

  it("Input with errors (touched and untouched)", () => {
    const renderInput = renderer.create(
      <Input
        keyboardType={"email-address"}
        label={"Email"}
        autoCapitalize="none"
        placeholder={"Enter your account email address"}
        whiteLabel={false}
        error={"Email is invalid"}
      />
    );

    const renderInputTouched = renderer.create(
      <Input
        keyboardType={"email-address"}
        label={"Email"}
        autoCapitalize="none"
        placeholder={"Enter your account email address"}
        whiteLabel={false}
        error={"Email is invalid"}
        touched={true}
      />
    );

    expect(renderInput).toMatchSnapshot();
    expect(renderInputTouched).toMatchSnapshot();
  });

  it("Input with errors (touched and untouched)", () => {
    const renderInputHintAndError = renderer.create(
      <Input
        keyboardType={"email-address"}
        label={"Email"}
        autoCapitalize="none"
        placeholder={"Enter your account email address"}
        whiteLabel={false}
        error={"Email is invalid"}
        hint={"Email is invalid"}
        touched={true}
      />
    );

    const renderInputHint = renderer.create(
      <Input
        keyboardType={"email-address"}
        label={"Email"}
        autoCapitalize="none"
        placeholder={"Enter your account email address"}
        whiteLabel={false}
        hint={"Email is invalid"}
      />
    );

    // Error should show instead of hint  because error is enabled
    expect(renderInputHintAndError.toJSON().children[2].type).toEqual("View");

    // Hint should show in a text component
    expect(renderInputHint.toJSON().children[2].type).toEqual("Text");
  });
});
