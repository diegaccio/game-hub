import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ApiClient, { DataResponse } from "../services/api-client";

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
  genreId?: number;
  platformId?: number;
  ordering: string;
  search: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (queryParams: GameQueryParams) =>
  useInfiniteQuery<DataResponse<Game>, Error>({
    queryKey: ["games", queryParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: queryParams.genreId,
          parent_platforms: queryParams.platformId,
          ordering: queryParams.ordering,
          search: queryParams.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
    staleTime: 60 * 1000, //24h
  });

export default useGames;
