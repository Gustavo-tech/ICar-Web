export interface UserInfoResponse {
  email: string
  cpf: string
  accountCreationDate: string
  userName: string
}

export interface LoginResponse {
  id: number,
  time: string,
  success: boolean
}
