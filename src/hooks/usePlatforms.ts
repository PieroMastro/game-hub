import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents") // if I use the endpoint: '/platforms/' will get every platform available for games (check useGames.ts hook for info)
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
