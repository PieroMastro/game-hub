import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  // rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          // platforms: gameQuery.platform?.id, | Using this parameter will lead to an error fetching Playstation data.
          parent_platforms: gameQuery.platform?.id, // Using this parameter will get all playstation games under one single platform.
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Game>>("/games", {
    //       params: {
    //         genres: gameQuery.genre?.id,
    //         platforms: gameQuery.platform?.id,
    //         ordering: gameQuery.sortOrder,
    //         search: gameQuery.searchText,
    //       },
    //     })
    //     .then((res) => res.data),
  });

export default useGames;
