import axios, { AxiosRequestConfig } from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) {
  throw new Error("API key is not defined in the environment variables.");
}

export interface DataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: apiKey },
});

class ApiClient<T> {
  // With parameter properties we can
  // create and initialize properties in one place.
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig = {}) => {
    return axiosInstance
      .get<DataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  //post = (data: T) => {
  //  return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  //};
}

export default ApiClient;
