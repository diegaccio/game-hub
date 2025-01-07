import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //design smells
  //we shoul have an array of platforms
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results); 
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;  // Ignore fetch aborts
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {games, error, isLoading};
};

export default useGames;