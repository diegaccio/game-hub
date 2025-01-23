import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Trailer } from "../entities/Trailer";
import ApiClient from "../services/api-client";

const useScreenshots = (gameid: number) => {
  ///games/{id}/screenshots

  const apiClient = new ApiClient<Trailer>(`/games/${gameid}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameid],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
