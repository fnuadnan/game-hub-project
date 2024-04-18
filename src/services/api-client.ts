import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "09485dd627064695b4f1aebbd96051a7",
  },
});
