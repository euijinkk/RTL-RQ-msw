import { fireEvent, screen } from "@testing-library/react";
import App from "../App";
import { resetCounter } from "../mocks/handler";
import { render } from "./util";

describe("counter component", () => {
  beforeEach(() => {
    resetCounter();
  });

  test("카운터 받아 오기 성공", async () => {
    render(<App />);

    expect(await screen.findByText("0")).toBeInTheDocument();
  });

  test("카운터 증가 성공", async () => {
    render(<App />);

    expect(await screen.findByText("0")).toBeInTheDocument();

    const plusButton = screen.getByText("+");

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(await screen.findByText("3")).toBeInTheDocument();
  });

  test("카운터 감소 성공", async () => {
    render(<App />);

    expect(await screen.findByText("0")).toBeInTheDocument();

    const minusButton = screen.getByText("-");

    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);

    expect(await screen.findByText("-3")).toBeInTheDocument();
  });
});
