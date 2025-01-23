import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Scrennshot } from "../entities/Screenshots";
import ApiClient from "../services/api-client";

const useScreenshots = (gameid: number) => {
  ///games/{id}/screenshots

  const apiClient = new ApiClient<Scrennshot>(`/games/${gameid}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameid],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
