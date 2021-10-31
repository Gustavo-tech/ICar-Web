export interface UserInfoResponse {
  email: string
  cpf: string
  accountCreationDate: string
  userName: string
}

export interface TalkResponse {
  name: string;
  lastMessage: string;
}

export interface LoginResponse {
  id: number,
  time: string,
  success: boolean
}
