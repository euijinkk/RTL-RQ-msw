import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// 테스트간의 독립성을 보장하기 위해, 테스트 마다 다른 queryClient를 만든다.
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// 모든 Context Provider가 들어간다.
const AllTheProviders = ({ children }: PropsWithChildren) => {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

// render 함수에서 Provider를 주입해서 만든 커스텀 렌더 함수이다.
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
