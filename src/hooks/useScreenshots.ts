import { useQuery } from "@tanstack/react-query";
import Screenshots from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
