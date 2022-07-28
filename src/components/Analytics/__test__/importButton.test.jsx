import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import ImportButton from "../importButton"
import "@testing-library/jest-dom"

afterEach( () => {
    cleanup();
})

test("should render importButton component", () => {
    render(<ImportButton/>)

    var importButtonElem = screen.getByTestId("importButton");
    expect(importButtonElem).toBeInTheDocument();
})