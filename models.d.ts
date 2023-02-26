// Cursed Enums

export type DietaryRestriction =
  | "V"
  | "VG"
  | "APNT"
  | "ATNT"
  | "AWHT"
  | "AGTN"
  | "ASOY"
  | "ASES"
  | "AMLK"
  | "AEGG"
  | "ACSF"
  | "AFSH"
  | "HAL"
  | "LC"
  | "HC";
export type DiningHallName = "BP" | "DN" | "RV" | "BC" | "EC" | "EA" | "SH";
export type MealPlan = "11" | "14" | "19";
export type MealPeriodName = "B" | "L" | "D" | "E";
export type DaysOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

// Aliases to classify which type of identifiers (should all be UUIDs)
export type UserID = string;
export type MealID = string;

// Object Models

// Extended by Mongoose
export type User = {
  // Basic identifying info
  id: UserID;
  email: string;
  name: string;
  pfp?: string;

  // For backend
  tokens?: string[];
  notificationTokens: { type: "Android" | "iOS", token: string }[]

  // App specific info
  favMeals: MealID[];
  favDiningHalls: DiningHall[];
  dietaryRestrictions: DietaryRestriction[];
  mealPlan?: MealPlan;
  caloricIntakePerDay?: number;
};

export type NutritionalInfo = {
  calories: number; // going to add more later
}

// Extended by Mongoose
export type Meal = {
  id: MealID;
  diningHall: DiningHallName;
  dietaryRestrictions: DietaryRestriction[];
  price: number;
  description?: string;
  ingredients: string[];
  nutritionalInfo: NutritionalInfo;

  subcategory?: string;
  mealID: string;
};

export type Subcategory = {
  name: string;
  meals: MealID[];
};

export type MealPeriod = {
  startTime: Date;
  endTime: Date;
  subcategories: Subcategory[];
};

// Extended by Mongoose
export type DiningHall = {
  name: DiningHallName;
  date: Date;
  activityLevel: number;
  mealPeriods: {
    [Property in MealPeriodName]?: MealPeriod;
  };
};

// Extended by Mongoose
export type ComprehensiveMealPlan = {
  user: UserID;
  startDate: Date;
  meals: { [Property in DaysOfWeek]: { [Property in MealPeriodName]: MealID[] } };
};
