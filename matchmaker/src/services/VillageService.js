//import { request } from "../base/HTTP";
import { OK, NOT_FOUND } from "http-status-codes";
import strings from "../localization";

let villages = [
  {
    id: 1,
    name: "Mionica and Gostoljublje",
    description:
      "Near the mountain village of Divčibare, at 650 metres above sea level, tucked away in nature’s embrace hides a beautiful village called Mionica. And in it is the interesting household of Gostoljublje where recreation and relaxation are so much more than a regular outing.You must be wondering why? There are several reasons. We’ll just tell you that here you can relax in authentic little houses and try different specialties of traditional Serbian cuisine. We leave it to you to find the rest out for yourself!"
  },
  {
    id: 2,
    name: "Sirogojno",
    description:
      "If Sirogojno looks like something out of a dream to you, do not be alarmed. There is no need to rub your eyes frantically or resort to pinching bits of skin. Part of this village in Zlatibor is made up of an open-air museum, showcasing traditional ways of life from the region, dating all the way back to the 19th century. The wooden buildings that dot the landscape further enhance the time-travelling experience."
  },
  {
    id: 3,
    name: "Mionica and Gostoljublje",
    description:
      "Near the mountain village of Divčibare, at 650 metres above sea level, tucked away in nature’s embrace hides a beautiful village called Mionica. And in it is the interesting household of Gostoljublje where recreation and relaxation are so much more than a regular outing.You must be wondering why? There are several reasons. We’ll just tell you that here you can relax in authentic little houses and try different specialties of traditional Serbian cuisine. We leave it to you to find the rest out for yourself!"
  },
  {
    id: 4,
    name: "Sirogojno",
    description:
      "If Sirogojno looks like something out of a dream to you, do not be alarmed. There is no need to rub your eyes frantically or resort to pinching bits of skin. Part of this village in Zlatibor is made up of an open-air museum, showcasing traditional ways of life from the region, dating all the way back to the 19th century. The wooden buildings that dot the landscape further enhance the time-travelling experience."
  }
];

export async function getVillages() {
  //return await request("/villages");
  return {
    data: villages,
    status: OK
  };
}

export async function getVillage(id) {
  //return await request("/villages/" + id);
  let requestedVillage = null;
  for (let village of villages) {
    if (village.id === id) {
      requestedVillage = village;
    }
  }
  return {
    data: requestedVillage,
    status: requestedVillage ? OK : NOT_FOUND
  };
}
