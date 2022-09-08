import React from "react";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const BASE_URL = "http://localhost:8080";

function App() {
  const queryClient = useQueryClient();

  const { isLoading, data: count } = useQuery<number>(["counter"], () =>
    fetch(`${BASE_URL}/counter`).then((res) => res.json())
  );

  const { mutate } = useMutation(
    (increment: number) =>
      fetch(`${BASE_URL}/counter`, {
        method: "POST",
        body: JSON.stringify(increment),
      }),
    {
      onSuccess() {
        queryClient.invalidateQueries("counter");
      },
    }
  );

  const increase = () => {
    mutate(1);
  };

  const decrease = () => {
    mutate(-1);
  };

  if (isLoading) {
    return <>...Loading</>;
  }

  return (
    <div className="App">
      <div>{count ?? 1}</div>
      <div onClick={increase}>+</div>
      <div onClick={decrease}>-</div>
    </div>
  );
}

export default App;
