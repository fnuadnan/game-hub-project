import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiclient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });
};

export default useGame;
