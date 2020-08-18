import { request } from "../base/HTTP";
import HttpMethod from "../constants/HttpMethod";

export async function getBlogs() {
  return await request("/blogs");
}
