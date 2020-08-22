import { request } from "../base/HTTP";
import { OK } from "http-status-codes";

export async function searchUsers(data) {
  //return await request("/search", data);
  return {
    data: [
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
          "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
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
          "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
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
          "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
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
          "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
      },
    ],
    status: OK,
  };
}
