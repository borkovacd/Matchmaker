import { request } from "../base/HTTP";
import { OK } from "http-status-codes";
import strings from "../localization";

export async function getVillages() {
  //return await request("/villages");
  return {
    data: {
      villages: [
        {
          id: 1,
          name: "Mionica and Gostoljublje",
          description:
            "Near the mountain village of Divčibare, at 650 metres above sea level, tucked away in nature’s embrace hides a beautiful village called Mionica. And in it is the interesting household of Gostoljublje where recreation and relaxation are so much more than a regular outing.You must be wondering why? There are several reasons. We’ll just tell you that here you can relax in authentic little houses and try different specialties of traditional Serbian cuisine. We leave it to you to find the rest out for yourself!",
          image:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/439/43917426.jpg"
        },
        {
          id: 2,
          name: "Sirogojno",
          description:
            "If Sirogojno looks like something out of a dream to you, do not be alarmed. There is no need to rub your eyes frantically or resort to pinching bits of skin. Part of this village in Zlatibor is made up of an open-air museum, showcasing traditional ways of life from the region, dating all the way back to the 19th century. The wooden buildings that dot the landscape further enhance the time-travelling experience.",
          image:
            "https://www.panacomp.net/wp-content/uploads/2015/10/featured-sirogojno-plot-47023.jpg"
        },
        {
          id: 3,
          name: "Mionica and Gostoljublje",
          description:
            "Near the mountain village of Divčibare, at 650 metres above sea level, tucked away in nature’s embrace hides a beautiful village called Mionica. And in it is the interesting household of Gostoljublje where recreation and relaxation are so much more than a regular outing.You must be wondering why? There are several reasons. We’ll just tell you that here you can relax in authentic little houses and try different specialties of traditional Serbian cuisine. We leave it to you to find the rest out for yourself!",
          image:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/439/43917426.jpg"
        },
        {
          id: 4,
          name: "Sirogojno",
          description:
            "If Sirogojno looks like something out of a dream to you, do not be alarmed. There is no need to rub your eyes frantically or resort to pinching bits of skin. Part of this village in Zlatibor is made up of an open-air museum, showcasing traditional ways of life from the region, dating all the way back to the 19th century. The wooden buildings that dot the landscape further enhance the time-travelling experience.",
          image:
            "https://www.panacomp.net/wp-content/uploads/2015/10/featured-sirogojno-plot-47023.jpg"
        },
        {
          id: 5,
          name: "Mionica and Gostoljublje",
          description:
            "Near the mountain village of Divčibare, at 650 metres above sea level, tucked away in nature’s embrace hides a beautiful village called Mionica. And in it is the interesting household of Gostoljublje where recreation and relaxation are so much more than a regular outing.You must be wondering why? There are several reasons. We’ll just tell you that here you can relax in authentic little houses and try different specialties of traditional Serbian cuisine. We leave it to you to find the rest out for yourself!",
          image:
            "https://r-cf.bstatic.com/images/hotel/max1024x768/439/43917426.jpg"
        },
        {
          id: 6,
          name: "Sirogojno",
          description:
            "If Sirogojno looks like something out of a dream to you, do not be alarmed. There is no need to rub your eyes frantically or resort to pinching bits of skin. Part of this village in Zlatibor is made up of an open-air museum, showcasing traditional ways of life from the region, dating all the way back to the 19th century. The wooden buildings that dot the landscape further enhance the time-travelling experience.",
          image:
            "https://www.panacomp.net/wp-content/uploads/2015/10/featured-sirogojno-plot-47023.jpg"
        }
      ]
    },
    status: OK
  };
}

export async function getVillageName(id) {
  let villageName = undefined;
  switch (id) {
    case 1:
      villageName = "Mionica i Gostoljublje";
      break;
    case 2:
      villageName = "Sirogojno";
      break;
    default:
      villageName = undefined;
      break;
  }
  return {
    data: {
      name: villageName
    },
    status: OK
  };
}

export function getCountryName(id) {
  switch (id) {
    case 1:
      return strings.countries.rs;
      break;
    case 2:
      return strings.countries.gb;
      break;
    case 3:
      return strings.countries.de;
    default:
      return "undefined";
      break;
  }

  /*let countryName = undefined;
  switch (id) {
    case 1:
      countryName = strings.countries.rs;
      break;
    case 2:
      countryName = strings.countries.gb;
      break;
    case 3:
      countryName = strings.countries.de;
      break;
    default:
      countryName = undefined;
      break;
  }
  return {
    data: {
      name: countryName
    },
    status: OK
  };*/
}
