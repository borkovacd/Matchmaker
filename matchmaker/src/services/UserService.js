import { request } from "../base/HTTP";
import HttpMethod from "../constants/HttpMethod";

export async function register(user) {
  return await request("/users/", user, HttpMethod.POST);
}

export async function editUser(user) {
  return await request("/users/edit", user, HttpMethod.PUT);
}

export async function getUserDetails(user) {
  return await request("/users/details/" + user);
}

export async function getUserRegistrationDetailsData() {
  return await request("/registration-details/");
}

export async function uploadProfileImage(data) {
  return await request("/user/profile_image/upload", data, HttpMethod.POST);
}

export async function resetPassword(data) {
  return await request("/users/password/reset", data, HttpMethod.POST);
}

export async function resetPasswordForm(data) {
  return await request("/users/password/reset-form", data, HttpMethod.POST);
}

export async function changeUserState(data) {
  return await request("/users/state", data, HttpMethod.POST);
}
