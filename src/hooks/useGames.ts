import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { DataResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

export interface GameQueryParams {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const queryParams = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<DataResponse<Game>, Error>({
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
    staleTime: ms("60m"),
    //refetchInterval: ms("5s"), // Auto refresh every second
  });
};

export default useGames;
