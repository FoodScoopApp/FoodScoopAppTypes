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
export type DiningHallName = "BP" | "DN" | "RW" | "RE" | "BC" | "EC" | "EA" | "SH" | "DR";
export type MealPlan = "11" | "14" | "19";
export type MealPeriodName = "B" | "L" | "D" | "E";
export type DaysOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

// Aliases to classify which type of identifiers (should all be UUIDs)
export type MealID = string;
export type UCLAMealID = string;

// Object Models

// Extended by Mongoose
export type User = {
  // Basic identifying info
  email: string;
  name: string;
  pfp?: string;
  hash: string;

  // For backend
  tokens?: string[];
  notificationTokens?: { device: "Android" | "iOS", token: string }[]

  // App specific info
  favMeals?: UCLAMealID[];
  favDiningHalls?: DiningHallName[];
  dietaryRestrictions?: DietaryRestriction[];
  mealPlan?: MealPlan;
  caloricIntakePerDay?: number;
  notificationsSent?: NotificationsSent;
};

export type NotificationsSent = { [Property in DiningHallName]: string | null }

export type NutritionalInfo = {
  calories: number; // going to add more later
  sodium: number;
  protein: number;
}

// Extended by Mongoose
export type Meal = {
  id: MealID;
  name: string;
  diningHall: DiningHallName;
  dietaryRestrictions: DietaryRestriction[];
  price: number;
  description?: string;
  ingredients?: string;
  nutritionalInfo: NutritionalInfo;

  subcategory?: string;
};

export type Subcategory = {
  name: string;
  meals: MealID[];
  mealsFilled?: Meal[];
};

export type MealPeriod = {
  name: MealPeriodName
  startTime: string;
  endTime: string;
  subcategories: Subcategory[];
};

// Extended by Mongoose
export type DiningHall = {
  name: DiningHallName;
  date: string;
  activityLevel?: number;
  mealPeriods: MealPeriod[];
  finished: boolean; // Mongoose only to determine to add or not
};

// Extended by Mongoose
export type ComprehensiveMealPlan = {
  user: string; // email
  startDate: string;
  meals: { [Property in DaysOfWeek]: { [Property in MealPeriodName]: MealID[] } };
};
