"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("@testing-library/react-native");
const PhoneInput_1 = __importDefault(require("./PhoneInput"));
describe("PhoneInput", () => {
    it("renders with default US country code", () => {
        const { getByTestId } = (0, react_native_1.render)(react_1.default.createElement(PhoneInput_1.default, { testID: "phone-input" }));
        const input = getByTestId("phone-input");
        expect(input).toBeTruthy();
    });
    it("formats US phone numbers correctly", () => {
        const { getByTestId } = (0, react_native_1.render)(react_1.default.createElement(PhoneInput_1.default, { testID: "phone-input" }));
        const input = getByTestId("phone-input");
        (0, react_native_1.act)(() => {
            react_native_1.fireEvent.changeText(input, "5551234567");
        });
        expect(input.props.value).toBe("+1 555-123-4567");
    });
    it("handles country change", () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = (0, react_native_1.render)(react_1.default.createElement(PhoneInput_1.default, { testID: "phone-input", onChange: onChangeMock }));
        const input = getByTestId("phone-input");
        (0, react_native_1.act)(() => {
            react_native_1.fireEvent.changeText(input, "+44 020 7946 0958");
        });
        expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({
            countryCode: "GB",
            isValid: true,
        }));
    });
    it("validates phone numbers", () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = (0, react_native_1.render)(react_1.default.createElement(PhoneInput_1.default, { testID: "phone-input", onChange: onChangeMock }));
        const input = getByTestId("phone-input");
        // Invalid number
        (0, react_native_1.act)(() => {
            react_native_1.fireEvent.changeText(input, "123");
        });
        expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({
            isValid: false,
        }));
        // Valid number
        (0, react_native_1.act)(() => {
            react_native_1.fireEvent.changeText(input, "408-346-9089");
        });
        expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({
            isValid: true,
        }));
    });
    it("handles initial value prop", () => {
        const { getByTestId } = (0, react_native_1.render)(react_1.default.createElement(PhoneInput_1.default, { testID: "phone-input", value: "5551234567" }));
        const input = getByTestId("phone-input");
        expect(input.props.value).toBe("+1 555-123-4567");
    });
    it("handles initial country prop", () => {
        const { getByTestId } = (0, react_native_1.render)(react_1.default.createElement(PhoneInput_1.default, { testID: "phone-input", initialCountry: "GB", value: "7700900123" }));
        const input = getByTestId("phone-input");
        expect(input.props.value).toBe("+44 7700 900123");
    });
});
