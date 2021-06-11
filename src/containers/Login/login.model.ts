export interface ILogin {
  grant_type: string;
  username: string;
  password: string;
  scope: string;
  client_id: string;
  client_secret: string;
  msg: any,
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}
