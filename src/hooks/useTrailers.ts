import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Trailer } from "../entities/Trailer";
import ApiClient from "../services/api-client";

const useTrailers = (gameid: number) => {
  ///games/{id}/movies

  const apiClient = new ApiClient<Trailer>(`/games/${gameid}/movies`);

  return useQuery({
    queryKey: ["trailers", gameid],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTrailers;
