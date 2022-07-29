import { render, screen, cleanup } from '@testing-library/react'
import Chart from "../chart"
import "@testing-library/jest-dom"
import { RecoilRoot } from 'recoil'
export * from 'recharts';

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

test("should render chart component", () => {
    render(<RecoilRoot><Chart/></RecoilRoot>)

    var chartElem = screen.getByTestId("chart");
    expect(chartElem).toBeInTheDocument();
})