import { DaysOfWeek, DietaryRestriction, DiningHallName, MealPeriodName } from "./models";

export const convertDiningHall: { [Property in DiningHallName]: string } = {
  BP: "Bruin Plate",
  DN: "De Neve",
  RV: "Rendezvous",
  BC: "Bruin Cafe",
  EC: "Epicuria at Covel",
  EA: "Epicuria at Ackerman",
  SH: "Study at Hedrick",
};

// TODO: add conversion function for dietary restrictions: Surya?
export const convertDietaryRestrictions: { [Property in DietaryRestriction]: string } = {
  V: "",
  VG: "",
  APNT: "",
  ATNT: "",
  AWHT: "",
  AGTN: "",
  ASOY: "",
  ASES: "",
  AMLK: "",
  AEGG: "",
  ACSF: "",
  AFSH: "",
  HAL: "",
  LC: "",
  HC: ""
};

export const convertMealPeriods: { [Property in MealPeriodName]: string } = {
  B: "Breakfast",
  L: "Lunch",
  D: "Dinner",
  E: "Extended Dinner",
};

export const convertDaysOfTheWeek: { [Property in DaysOfWeek]: string } = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};
