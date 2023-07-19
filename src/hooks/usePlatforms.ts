import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
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
        .get<FetchResponse<Platform>>("/platforms") // if I use the endpoint: '/platforms/lists/parents' playstation games will not render **revise later
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
