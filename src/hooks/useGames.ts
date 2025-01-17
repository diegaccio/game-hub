import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import apiClient from "../services/api-client";
import { DataResponse } from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //design smells
  //we shoul have an array of platforms
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface GameQueryParams {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}

const useGames = (queryParams: GameQueryParams) =>
  useQuery<DataResponse<Game>, Error>({
    queryKey: ["games", queryParams],
    queryFn: () =>
      apiClient
        .get<DataResponse<Game>>("/games", {
          params: {
            genres: queryParams.genre?.id,
            parent_platforms: queryParams.platform?.id,
            ordering: queryParams.ordering,
            search: queryParams.search,
          },
        })
        .then((res) => res.data),
    staleTime: 60 * 1000, //24h
  });

export default useGames;
