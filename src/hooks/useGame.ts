import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from "ms";
import { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
