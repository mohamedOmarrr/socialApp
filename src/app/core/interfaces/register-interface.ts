export interface registerData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  dateOfBirth: string | Date;
  gender: 'male' | 'female';
}

export interface registerOutput {
    message: string
}
