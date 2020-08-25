//import { request } from "../base/HTTP";
//import HttpMethod from "../constants/HttpMethod";
import { OK, NOT_FOUND } from "http-status-codes";

let users = [
  {
    id: 1,
    username: "marko",
    name: "Marko",
    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
  },
  {
    id: 9,
    username: "marko",
    name: "Marko",

    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
  },
  {
    id: 13,
    username: "marko",
    name: "Marko",
    birthday: "05/05/1990",
    gender: 1,
    interestedInGender: 2,
    interestedInAgeMin: 25,
    interestedInAgeMax: 35,
    interestedFor: [1, 2, 3, 4],
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 1,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
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
    country: 1,
    village: 2,
    description:
      "Honest and faithful, romantic I'm an intellectual. I want to introduce myself and start a strong family. Who really wants to start such a beautiful family. I am waiting you.",
    nationality: "Serbian",
    languages: "Serbian, English, German",
    height: 173,
    weight: 80,
    figure: "Normal",
    hair: "Black",
    hairLength: "Cut",
    eyes: "Blue",
    ethnicOrigin: "Other",
    religion: "Christian",
    academicDegree: "Master Degree",
    profession: "Philosopher",
    income: "More than 100,000 $/year",
    maritalStatus: "Divorced",
    children: "2 Children",
    smokingHabits: "I don't smoke",
    drinkingHabits: "No, thank you",
    zodiac: "Libra",
    interestedInHeightMin: 173,
    interestedInHeightMax: 188,
    interestedInWeightMin: 80,
    interestedInWeightMax: 90,
    interestedInFigure: "Аthletic, Fat, Normal, Plump, Slender, Thin",
    interestedInHair: "Auburn, Bald, Black, Blond, Chestnut, Fair, Red",
    interestedInHairLength: "Average, Cut, Long, Short, Very long, Very short",
    interestedInEyes: "Black, Blue, Brown, Green, Grey, Other",
    interestedInEthnicOrigin: "Africa, Arab, Asia, Europe, India, Spanish",
    interestedInReligion:
      "Agnostic, Atheist, Buddhist, Catholic, Christian, Other",
    interestedInAcademicDegree: "Маster Degree",
    interestedInProfession: "Other",
    interests: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 5,
      },
      {
        id: 5,
        value: 3,
      },
      {
        id: 6,
        value: 2,
      },
      {
        id: 7,
        value: 5,
      },
      {
        id: 8,
        value: 3,
      },
      {
        id: 9,
        value: 1,
      },
      {
        id: 10,
        value: 4,
      },
      {
        id: 11,
        value: 3,
      },
      {
        id: 12,
        value: 5,
      },
      {
        id: 13,
        value: 4,
      },
      {
        id: 14,
        value: 2,
      },
      {
        id: 15,
        value: 3,
      },
      {
        id: 16,
        value: 1,
      },
      {
        id: 17,
        value: 5,
      },
      {
        id: 18,
        value: 4,
      },
    ],
  },
];

export async function getUserDetails(user) {
  //return await request("/users/details/" + user);
  let requestedUser = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === user) {
      requestedUser = users[i];
    }
  }
  return {
    data: requestedUser,
    status: requestedUser ? OK : NOT_FOUND,
  };
}

export async function getNewPeople(number) {
  //return await request("/users/new/" + number);
  let newPeople = [];
  for (var i = 0; i < number; i++) {
    if (users[i] != null) {
      newPeople.push(users[i]);
    }
  }
  return {
    status: OK,
    data: newPeople,
  };
}

export async function register(user) {
  //return await request("/auth/signup", user, HttpMethod.POST);
  return {
    status: OK,
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

//helper method for Search
export function getAllUsers() {
  return users;
}
