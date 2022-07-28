import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import Topbar from "../Topbar"
import "@testing-library/jest-dom"

afterEach( () => {
    cleanup();
})

test("should render topbar component", () => {
    render(<Topbar />)

    var topbarElem = screen.getByTestId("topbar");
    expect(topbarElem).toBeInTheDocument();
})