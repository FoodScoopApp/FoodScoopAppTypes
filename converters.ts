import {
    DaysOfWeek,
    DietaryRestriction,
    DiningHallName,
    MealPeriodName,
} from "./models";

import { ErrorCode } from "./re";

export const convertDiningHall: { [Property in DiningHallName]: string } = {
    BP: "Bruin Plate",
    DN: "De Neve",
    RE: "Rendezvous East",
    RW: "Rendezvous West",
    BC: "Bruin Cafe",
    EC: "Epicuria at Covel",
    EA: "Epicuria at Ackerman",
    SH: "Study at Hedrick",
    DR: "The Drey",
};

export const convertScrapingMealPeriod: { [key: string]: MealPeriodName } = {
    breakfast: "B",
    lunch: "L",
    dinner: "D",
    extended: "E",
};

// TODO: add conversion function for dietary restrictions: Surya?
export const convertDietaryRestrictions: {
    [Property in DietaryRestriction]: string;
} = {
    V: "Vegetarian",
    VG: "Vegan",
    APNT: "Contains Peanuts",
    ATNT: "Contains Tree Nutes",
    AWHT: "Contains Wheat",
    AGTN: "Contains Gluten",
    ASOY: "Contains Soy",
    ASES: "Contains Sesame",
    AMLK: "Contains Dairy",
    AEGG: "Contains Eggs",
    ACSF: "Contains Crustacean Shellfish",
    AFSH: "Contains Fish",
    HAL: "Halal",
    LC: "Low Carbon",
    HC: "High Carbon",
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

export const errorCodes: { [Property in ErrorCode]: string } = {
    Internet:
        "There is either an error with your internet connection or the FoodScoop server is down.",
    Unauthorized:
        "You are unauthorized to access this resource. (Are you signed in?)",
    BadRequest: "There was an application error.",
    InternalServer: "The FoodScoop server encountered an error.",
    AlreadyExists: "This user is already registered. Please sign in.",

    NotSignedUp: "This user does not exist.",
    WrongPassword: "Incorrect email or password.",
    NotFound: "Could not find this resource in the database.",
    Unknown: "An unknown error has occured.",
};

export const convertErrorCode = (code: string) => {
    if (Object.keys(errorCodes).indexOf(code) > -1) {
        return errorCodes[code as ErrorCode];
    } else {
        return errorCodes["Unknown"];
    }
};

export const dateFormat = "YYYY-MM-DD";

export const getImageID = (mealID: string) =>
    "https://menu.dining.ucla.edu/Content/Images/RecipeImages/" +
    mealID +
    ".jpg";
