import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Screeshot } from "../entities/Screenshot";

const useScreeshots = (gameId: number) => {
  const apiClient = new APIClient<Screeshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["Screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreeshots;
