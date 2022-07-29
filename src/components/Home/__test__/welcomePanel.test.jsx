import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import "@testing-library/jest-dom"
import WelcomePanel from '../welcomePanel'

afterEach( () => {
    cleanup();
})

test("should render WelcomePanel component", () => {
    render(<WelcomePanel/>)

    var welcomePanelElem = screen.getByTestId("welcomePanel");
    expect(welcomePanelElem).toBeInTheDocument();
})