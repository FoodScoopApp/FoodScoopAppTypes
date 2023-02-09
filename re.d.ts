type Endpoint = "userexists" | "signup" | "signin";

// Requests
type CheckUserExistsReq = { email: string };
type SignUpReq = { name: string; email: string; password: string };
type SignInReq = { email: string; password: string };

// Responses
type CheckUserExistsResp = { exists: boolean };
type SignUpInResp = { token };

// Errors
type ErrorCodeConnection =
  | "Internet"
  | "Unauthorized"
  | "BadRequest"
  | "InternalServer";
type ErrorCodeSignIn = "AlreadyExists" | "NotSignedUp" | "WrongPassword";
type ErrorCode = ErrorCodeConnection | ErrorCodeSignIn;
type ErrorResp = { error: ErrorCode };
