import { create } from "zustand";
import { GameQueryParams } from "./hooks/useGames";

interface GameQueryStore {
  gameQuery: GameQueryParams;
  setSearchText: (search: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId?: number) => void;
  setOrdering: (ordering: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  //default value
  gameQuery: {},
  setSearchText: (search: string) =>
    set(() => ({
      //this removes other filters
      gameQuery: { search },
    })),
  setGenreId: (genreId: number) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId },
    })),
  setPlatformId: (platformId?: number) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId },
    })),
  setOrdering: (ordering: string) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, ordering },
    })),
}));

export default useGameQueryStore;
