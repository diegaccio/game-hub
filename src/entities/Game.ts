import { Platform } from "../entities/Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  //design smells
  //we shoul have an array of platforms
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
