// filepath: c:\Users\Imgen\Documents\GitHub\Jobchaser3\src\interfaces.ts
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
}