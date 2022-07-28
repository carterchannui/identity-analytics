import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import Sidebar from "../Sidebar"
import "@testing-library/jest-dom"
import { MemoryRouter } from 'react-router-dom'

afterEach( () => {
    cleanup();
})

test("should render Sidebar component", () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>)

    var sidebarElem = screen.getByTestId("sidebar");
    expect(sidebarElem).toBeInTheDocument();
})