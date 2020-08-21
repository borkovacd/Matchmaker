import { request } from "../base/HTTP";
import { OK } from "http-status-codes";

export async function getHomeData() {
  //return await request("/home");
  return {
    data: {
      languages: [
        { id: 1, name: "en" },
        { id: 2, name: "rs" },
        { id: 3, name: "de" }
      ],
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
        }
      ],
      users: [
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
      ]
    },
    status: OK
  };
}

export async function getVillages() {
  //return await request("/home/villages");
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
