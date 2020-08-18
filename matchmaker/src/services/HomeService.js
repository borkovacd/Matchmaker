import { request } from "../base/HTTP";

export async function getHomeData() {
  return await request("/api/home");
}
