import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import Statbox from "../statbox"
import "@testing-library/jest-dom"
import { RecoilRoot } from 'recoil'

afterEach( () => {
    cleanup();
})

test("should render statbox component", () => {
    render(<RecoilRoot><Statbox/></RecoilRoot>)

    var statboxElem = screen.getByTestId("statbox");
    expect(statboxElem).toBeInTheDocument();
})