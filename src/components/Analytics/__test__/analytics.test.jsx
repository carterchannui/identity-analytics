import { render, screen, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer"
import Analytics from "../analytics"
import "@testing-library/jest-dom"
import { RecoilRoot } from 'recoil'

afterEach( () => {
    cleanup();
})

jest.mock('recharts', () => {
    const OriginalRechartsModule = jest.requireActual('recharts');
  
    return {
      ...OriginalRechartsModule,
      ResponsiveContainer: ({ height, children }) => (
        <div className="recharts-responsive-container" style={{ width: 800, height }}>
          {children}
        </div>
      ),
    };
});

test("should render analytics component", () => {
    render(<RecoilRoot><Analytics/></RecoilRoot>)

    var analyticsElem = screen.getByTestId("analytics");
    expect(analyticsElem).toBeInTheDocument();
})