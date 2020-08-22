import { request } from "../base/HTTP";
import { OK } from "http-status-codes";
import { getAllUsers } from "./UserService";

export async function searchUsers(data) {
  //return await request("/search", data);
  console.log("DATA SEARCH: " + data.page);
  let users = getAllUsers();
  let result = [];
  let page = data.page;
  let perPage = data.perPage;
  let total = users.length;
  let pageNumber = Math.ceil(total / perPage);

  let startIndex = (page - 1) * perPage;
  for (let i = startIndex; i <= total; i++) {
    if (result.length < perPage) {
      result.push(users[i]);
    }
  }

  return {
    data: result,
    total: total,
    status: OK,
  };
}
