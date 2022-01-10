import { User } from '../models/user'

export function parseUserWithJwt(token: string): User {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  }

  catch (e) {
    let obj: User = {
      oid: '',
      extension_phone: '',
      name: '',
      emails: []
    }

    return obj
  }
}
