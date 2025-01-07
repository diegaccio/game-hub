import axios from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) {
  throw new Error("API key is not defined in the environment variables.");
}

export default axios.create({ baseURL: 'https://api.rawg.io/api',  params: { key: apiKey }});