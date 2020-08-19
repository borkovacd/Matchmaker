import { request } from "../base/HTTP";
import HttpMethod from "../constants/HttpMethod";
import { OK } from "http-status-codes";

export async function register(user) {
  //return await request("/auth/signup", user, HttpMethod.POST);
  return {
    response: OK,
    data: {
      user: {
        username: "borkovac",
        email: "borkovac.dragan@gmail.com",
      },
      token: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zS8VfSEv7h7nNVSkNhDIE783bVJTgPP9JlOHSDaIy1I",
        refresh_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.makKgC-n7pxiletqYhN77RKRvoS_9V7p9Y45dGjZrEY",
      },
    },
  };
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
