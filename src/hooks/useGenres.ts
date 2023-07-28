import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    //staleTime: 24 * 60 * 60 * 1000, --- Time in miliseconds, 24h | Replaced with ms library ---
    initialData: genres, // --- Replaced fetching with static data to minimize loading ---
  });

export default useGenres;
