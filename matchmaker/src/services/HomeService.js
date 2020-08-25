//import { request } from "../base/HTTP";
import { OK } from "http-status-codes";

export async function getHomeData() {
  //return await request("/home");
  return {
    data: {
      languages: [
        { id: 1, name: "en" },
        { id: 2, name: "rs" },
        { id: 3, name: "de" },
      ],
    },
    status: OK,
  };
}
