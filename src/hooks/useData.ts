import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Genre {
  id: number;
  name: string;
}

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData= <T> () => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<DataResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setData(response.data.results); 
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;  // Ignore fetch aborts
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {genres: data, error, isLoading};
};

export default useData;