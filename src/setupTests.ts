// 아마 이 파일이 jest.config.js에 주입되어 있을 것이다.
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { counterHandler } from "./mocks/handler";
// msw를 서버로 사용하여 테스트한다.
export const server = setupServer(...counterHandler);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
