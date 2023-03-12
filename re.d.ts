import { DiningHallName, DiningHall, MealID, Meal, User } from "./models";

type Endpoint =
  | "userexists"
  | "signup"
  | "signin"
  | "dininghall"
  | "meal"
  | "mealagg"
  | "user"
  | "updateuser"
  | "activity";
type Method = "get" | "post";

type Authorization = { username: string; password: string };

// Requests
type CheckUserExistsReq = { email: string };
type SignUpReq = { name: string; email: string; password: string };
type SignInReq = { email: string; password: string };
type DiningHallReq = { diningHallName: DiningHallName, date: string };
type MealReq = { mealID: MealID };
type MealAggReq = { mealIDs: string };
type UserReq = {};
type ChangeUserPropReq = Partial<{
  [key in keyof Omit<
    User,
    "id" | "tokens" | "notificationTokens" | "hash"
  >]: User[key];
}>;
type ActivityLevelReq = { diningHall: DiningHallName };

// Responses
type SuccessResp = { success: true };
type CheckUserExistsResp = { exists: boolean };
type SignUpInResp = { token: string };
type DiningHallResp = { diningHall: DiningHall };
type MealResp = { meal: Meal };
type MealAggResp = { meals: Meal[] };
type UserResp = { user: User };
type ChangeUserPropResp = SuccessResp;
type ActivityLevelResp = { level: number | null };
type ActivityLevelAggResp = { [Property in DiningHallName]: number | null };

// Errors
type ErrorCodeConnection =
  | "Internet"
  | "Unauthorized"
  | "BadRequest"
  | "InternalServer"
  | "NotFound"
  | "Unknown";
type ErrorCodeSignIn = "AlreadyExists" | "NotSignedUp" | "WrongPassword";
type ErrorCode = ErrorCodeConnection | ErrorCodeSignIn;
type ErrorResp = { error: ErrorCode; message?: string };

type Resp =
  | SuccessResp
  | CheckUserExistsResp
  | SignUpInResp
  | ErrorResp
  | DiningHallResp
  | MealResp
  | MealAggResp
  | UserResp
  | ChangeUserPropResp
  | ActivityLevelResp
  | ActivityLevelAggResp;
