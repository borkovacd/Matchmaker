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
        intrestedInGender: 2,
        intrestedInAgeMin: 25,
        interestedInAgeMax: 35,
        intrestedFor: [1, 2, 3, 4],
        village: 1
      },
      {
        id: 2,
        username: "nikola",
        name: "Nikola",
        birthday: "05/05/1955",
        gender: 1,
        intrestedInGender: 2,
        intrestedInAgeMin: 50,
        interestedInAgeMax: 70,
        intrestedFor: [1, 2, 4],
        village: 2
      },
      {
        id: 3,
        username: "milos",
        name: "Miloš",
        birthday: "05/05/1970",
        gender: 1,
        intrestedInGender: 2,
        intrestedInAgeMin: 50,
        interestedInAgeMax: 60,
        intrestedFor: [2],
        village: 1
      },
      {
        id: 4,
        username: "petar",
        name: "Petar",
        birthday: "05/05/1985",
        gender: 1,
        intrestedInGender: 2,
        intrestedInAgeMin: 30,
        interestedInAgeMax: 45,
        intrestedFor: [1, 3],
        village: 2
      }
    ],
    status: OK
  };
}
