export interface ILink {
  label: string;
  url: string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  position: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  location: ILink;
  certs: string[];
  education: string;
  skills: Record<string, string>;
  expertise: Record<string, string>;
  avatarUrl?: string;
  linkedIn?: ILink;
  createdAt?: string;
  updatedAt?: string;
}