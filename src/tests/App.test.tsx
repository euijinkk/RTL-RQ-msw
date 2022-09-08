import { fireEvent, screen } from "@testing-library/react";
import App from "../App";
import { resetCounter } from "../mocks/handler";
import { render } from "./util";

describe("counter component", () => {
  beforeEach(() => {
    // test간 독립성 유지를 위해 counter를 초기화시켜준다.
    resetCounter();
  });

  test("카운터 받아 오기 성공", async () => {
    render(<App />);

    // findBy 함수에는 getBy 쿼리에 act 함수가 추가되어 있다. 즉, Promise를 반환하여 비동기를 가능하게 한다.
    // await를 통해 리액트의 상태 변화, 서버 통신을 기다린다.
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
