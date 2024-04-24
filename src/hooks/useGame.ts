import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import APIClient from "../services/api-client";

const apiclient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });
};

export default useGame;
