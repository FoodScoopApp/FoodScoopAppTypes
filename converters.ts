import {
  DaysOfWeek,
  DietaryRestriction,
  DiningHallName,
  MealPeriodName,
} from "./models";

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
export const convertDietaryRestrictions: {
  [Property in DietaryRestriction]: string;
} = {
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
  HC: "",
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

export const convertErrorCode: { [Property in ErrorCode]: string } = {
  Internet: "There is either an error with your internet connection or the FoodScoop server is down.",
  Unauthorized: "You are unauthorized to access this resource. (Are you signed in?)",
  BadRequest: "There was an application error.",
  InternalServer: "The FoodScoop server encountered an error.",
  AlreadyExists: "This email is already registered. Please sign in.",

  // TODO: write the rest of these messages
  NotSignedUp: "",
  WrongPassword: ""
}
