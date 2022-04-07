import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const fetcher = async (url) => {
  const response = await fetch(BASE_URL + url);
  if (response.ok) return response.json();
  throw response;
};

export default function QC(props) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export function useProduct(id) {
  const { isLoading, error, data } = useQuery(["product", { id }], () =>
    fetcher(`/products/${id}`)
  );

  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
  };
}

// function Example() {
//   const { isLoading, error, data } = useQuery("repoData", () =>
//     fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
//       (res) => res.json()
//     )
//   );

//   if (isLoading) return "Loading...";

//   if (error) return "An error has occurred: " + error.message;

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   );
// }
