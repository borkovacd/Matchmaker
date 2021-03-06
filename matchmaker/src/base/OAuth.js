import CONFIG from "../config";
import HttpMethod from "../constants/HttpMethod";
import { request } from "./HTTP";
import history from "../history";
import { OK } from "http-status-codes";

export async function login(username, password) {
  clearUserData();

  // --- Never Used ---
  /*let data = {
    client_id: CONFIG.clientId,
    client_secret: CONFIG.clientSecret,
    grant_type: "password",
    username: username,
    password: password
  };*/

  let response = {
    status: OK,
    data: {
      user: {
        username: "borkovac",
        email: "borkovac.dragan@gmail.com"
      },
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zS8VfSEv7h7nNVSkNhDIE783bVJTgPP9JlOHSDaIy1I",
      refresh_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.makKgC-n7pxiletqYhN77RKRvoS_9V7p9Y45dGjZrEY"
    }
  };

  //return await request("/oauth/v2/token", data, HttpMethod.GET, false).then(
  //response => {
  //if (!response.ok) {
  //  return response;
  //}

  setTokenToLocalStorage(
    response.data.access_token,
    response.data.refresh_token
  );

  //return request("/user/current").then(response => {
  if (response.data.user) {
    setUserToLocalStorage(response.data.user);
  }

  return response;
  //});
}

export async function socialLogin(
  provider,
  email,
  firstName,
  lastName,
  socialId,
  accessToken,
  expiresAt
) {
  let data = {
    provider: provider,
    email: email,
    firstName: firstName ? firstName : "",
    lastName: lastName ? lastName : "",
    socialId: socialId,
    accessToken: accessToken,
    expiresAt: expiresAt
  };

  return await request("/social/authenticate", data, HttpMethod.POST).then(
    response => {
      if (!response.ok) {
        return;
      }

      setSocialTokenToLocalStorage(response.data.access_token);

      return request("/user/current").then(response => {
        if (response.data.user) {
          setUserToLocalStorage(response.data.user);
        }

        return response;
      });
    }
  );
}

export async function refreshToken(refreshToken) {
  let data = {
    client_id: CONFIG.clientId,
    client_secret: CONFIG.clientSecret,
    grant_type: "refresh_token",
    refresh_token: refreshToken
  };

  return await request("/oauth/v2/token", data, HttpMethod.GET, false).then(
    data => {
      setTokenToLocalStorage(data.access_token, data.refresh_token);

      return data.access_token !== undefined;
    }
  );
}

export function logout() {
  clearUserData();
  history.push("/");
}

export function setUserToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage() {
  let user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function setTokenToLocalStorage(access_token, refresh_token) {
  localStorage.setItem(CONFIG.tokenKey, access_token);
  localStorage.setItem(CONFIG.refreshTokenKey, refresh_token);
}

export function setSocialTokenToLocalStorage(access_token) {
  localStorage.setItem(CONFIG.socialTokenKey, access_token);
}

export function clearUserData() {
  localStorage.removeItem("user");
  localStorage.removeItem(CONFIG.tokenKey);
  localStorage.removeItem(CONFIG.refreshTokenKey);
}

export function getRefreshToken() {
  return localStorage.getItem(CONFIG.refreshTokenKey);
}

export function isUserLoggedIn() {
  return getUserFromLocalStorage() != null;
}
