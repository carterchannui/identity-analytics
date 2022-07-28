import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import Home from "../home"
import "@testing-library/jest-dom"

afterEach( () => {
    cleanup();
})

test("should render home component", () => {
    render(<Home/>)

    var homeElem = screen.getByTestId("home");
    expect(homeElem).toBeInTheDocument();
})