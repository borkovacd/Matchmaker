import { request } from "../base/HTTP";
import HttpMethod from "../constants/HttpMethod";
import { OK } from "http-status-codes";

let users = [
  {
    id: 1,
    username: "marko",
    name: "Marko",
    //email
    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 2,
    username: "nikola",
    name: "Nikola",
    birthday: "05/05/1955",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 70,
    interestedFor: [1, 2, 4],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 3,
    username: "milos",
    name: "Miloš",
    birthday: "05/05/1970",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 60,
    interestedFor: [2],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 4,
    username: "petar",
    name: "Petar",
    birthday: "05/05/1985",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 30,
    interestedInAgeMax: 45,
    interestedFor: [1, 3],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 5,
    username: "marko",
    name: "Marko",
    //email
    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 6,
    username: "nikola",
    name: "Nikola",
    birthday: "05/05/1955",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 70,
    interestedFor: [1, 2, 4],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 7,
    username: "milos",
    name: "Miloš",
    birthday: "05/05/1970",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 60,
    interestedFor: [2],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 8,
    username: "petar",
    name: "Petar",
    birthday: "05/05/1985",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 30,
    interestedInAgeMax: 45,
    interestedFor: [1, 3],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 9,
    username: "marko",
    name: "Marko",
    //email
    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 10,
    username: "nikola",
    name: "Nikola",
    birthday: "05/05/1955",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 70,
    interestedFor: [1, 2, 4],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 11,
    username: "milos",
    name: "Miloš",
    birthday: "05/05/1970",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 60,
    interestedFor: [2],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 12,
    username: "petar",
    name: "Petar",
    birthday: "05/05/1985",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 30,
    interestedInAgeMax: 45,
    interestedFor: [1, 3],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 13,
    username: "marko",
    name: "Marko",
    //email
    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 14,
    username: "nikola",
    name: "Nikola",
    birthday: "05/05/1955",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 70,
    interestedFor: [1, 2, 4],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 15,
    username: "milos",
    name: "Miloš",
    birthday: "05/05/1970",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 50,
    interestedInAgeMax: 60,
    interestedFor: [2],
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  },
  {
    id: 16,
    username: "petar",
    name: "Petar",
    birthday: "05/05/1985",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 30,
    interestedInAgeMax: 45,
    interestedFor: [1, 3],
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you."
  }
];

export async function register(user) {
  //return await request("/auth/signup", user, HttpMethod.POST);
  return {
    response: OK,
    data: {
      user: {
        username: "borkovac",
        email: "borkovac.dragan@gmail.com"
      },
      token: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zS8VfSEv7h7nNVSkNhDIE783bVJTgPP9JlOHSDaIy1I",
        refresh_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.makKgC-n7pxiletqYhN77RKRvoS_9V7p9Y45dGjZrEY"
      }
    }
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

export function getAllUsers() {
  return users;
}
