import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //design smells
  //we shoul have an array of platforms
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

export interface GameQueryParams {
  genre: Genre | null;
  platform: Platform | null;
}


const useGames = (queryParams: GameQueryParams) => useData<Game>("/games", {params: {genres: queryParams.genre?.id, parent_platforms: queryParams.platform?.id}}, [queryParams])

export default useGames;