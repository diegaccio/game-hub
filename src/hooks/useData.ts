import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, AxiosRequestConfig } from "axios";


export interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData= <T> (endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
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
  }, dependencies ? [...dependencies] : []);

  return {data, error, isLoading};
};

export default useData;