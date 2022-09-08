import { rest } from "msw";
import { BASE_URL } from "../App";

const initialCount = {
  count: 0,
};

export const counter = {
  count: 0,
};

export const resetCounter = () => {
  counter.count = initialCount.count;
};

export const counterHandler = [
  rest.get(`${BASE_URL}/counter`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(counter.count));
  }),
  rest.post<number>(`${BASE_URL}/counter`, (req, res, ctx) => {
    const { body: increment } = req;
    counter.count += Number(increment);

    return res(ctx.status(200), ctx.json(counter.count));
  }),
];
