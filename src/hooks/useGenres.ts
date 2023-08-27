import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    //staleTime: 24 * 60 * 60 * 1000, --- Time in miliseconds, 24h | Replaced with ms library ---
    initialData: genres, // --- Replaced fetching with static data to minimize loading ---
  });

export default useGenres;
