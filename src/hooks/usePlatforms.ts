import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms, //  --- Replaced fetching with static data to minimize loading ---

    // () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents") // if I use the endpoint: '/platforms/' will get every platform available for games (check useGames.ts hook for info)
    //     .then((response) => response.data),
  });

export default usePlatforms;
