import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import Settings from "../settings"
import "@testing-library/jest-dom"

afterEach( () => {
    cleanup();
})

test("should render settings component", () => {
    render(<Settings/>)

    var settingsElem = screen.getByTestId("settings");
    expect(settingsElem).toBeInTheDocument();
})