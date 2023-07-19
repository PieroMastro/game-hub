// import useData from "./useData";

// export interface Genre {
//   id: number;
//   name: string;
//   image_background: string;
// }

// const useGenres = () => useData<Genre>("/genres");

// export default useGenres;

import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
// --- replaced fetching with static data to minimize loading ---

export default useGenres;
