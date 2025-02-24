import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import PhoneInput from "./PhoneInput";

describe("PhoneInput", () => {
	it("renders with default US country code", () => {
		const { getByTestId } = render(<PhoneInput testID="phone-input" />);

		const input = getByTestId("phone-input");
		expect(input).toBeTruthy();
	});

	it("formats US phone numbers correctly", () => {
		const { getByTestId } = render(<PhoneInput testID="phone-input" />);

		const input = getByTestId("phone-input");

		act(() => {
			fireEvent.changeText(input, "5551234567");
		});

		expect(input.props.value).toBe("+1 555-123-4567");
	});

	it("handles country change", () => {
		const onChangeMock = jest.fn();
		const { getByTestId } = render(
			<PhoneInput testID="phone-input" onChange={onChangeMock} />
		);

		const input = getByTestId("phone-input");

		act(() => {
			fireEvent.changeText(input, "+44 020 7946 0958");
		});

		expect(onChangeMock).toHaveBeenCalledWith(
			expect.objectContaining({
				countryCode: "GB",
				isValid: true,
			})
		);
	});

	it("validates phone numbers", () => {
		const onChangeMock = jest.fn();
		const { getByTestId } = render(
			<PhoneInput testID="phone-input" onChange={onChangeMock} />
		);

		const input = getByTestId("phone-input");

		// Invalid number
		act(() => {
			fireEvent.changeText(input, "123");
		});

		expect(onChangeMock).toHaveBeenCalledWith(
			expect.objectContaining({
				isValid: false,
			})
		);

		// Valid number
		act(() => {
			fireEvent.changeText(input, "408-346-9089");
		});

		expect(onChangeMock).toHaveBeenCalledWith(
			expect.objectContaining({
				isValid: true,
			})
		);
	});

	it("handles initial value prop", () => {
		const { getByTestId } = render(
			<PhoneInput testID="phone-input" value="5551234567" />
		);

		const input = getByTestId("phone-input");
		expect(input.props.value).toBe("+1 555-123-4567");
	});

	it("handles initial country prop", () => {
		const { getByTestId } = render(
			<PhoneInput testID="phone-input" initialCountry="GB" value="7700900123" />
		);

		const input = getByTestId("phone-input");
		expect(input.props.value).toBe("+44 7700 900123");
	});
});
