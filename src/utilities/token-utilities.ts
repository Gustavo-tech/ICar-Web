type tokenObj = {
  oid: string;
  emails: string[];
}

export function parseJwt(token: string): tokenObj {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  }

  catch (e) {
    let obj: tokenObj = {
      oid: '',
      emails: []
    }

    return obj
  }
}
