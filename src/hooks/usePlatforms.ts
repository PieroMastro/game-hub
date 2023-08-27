import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms, //  --- Replaced fetching with static data to minimize loading ---

    // () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents") // if I use the endpoint: '/platforms/' will get every platform available for games (check useGames.ts hook for info)
    //     .then((response) => response.data),
  });

export default usePlatforms;
