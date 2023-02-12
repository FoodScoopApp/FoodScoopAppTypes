type Endpoint = "userexists" | "signup" | "signin";
type method = "get" | "post" | "delete";

type Authorization = { username: string, password: string }
// Requests
type CheckUserExistsReq = { email: string };
type SignUpReq = { name: string; email: string; password: string };
type SignInReq = { email: string; password: string };

// Responses
type CheckUserExistsResp = { exists: boolean };
type SignUpInResp = { token: string };

// Errors
type ErrorCodeConnection =
  | "Internet"
  | "Unauthorized"
  | "BadRequest"
  | "InternalServer";
type ErrorCodeSignIn = "AlreadyExists" | "NotSignedUp" | "WrongPassword";
type ErrorCode = ErrorCodeConnection | ErrorCodeSignIn;
type ErrorResp = { error: ErrorCode, message?: string };

type Resp = CheckUserExistsResp | SignUpInResp | ErrorResp;
