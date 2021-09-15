interface Groups {
  name: string;
}

export interface UserInterface {
  id: number;
  groups: Groups;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  gender: number;
  address: string;
  birthday: string;
  avatar: string;
}
