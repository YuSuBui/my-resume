import { ILink } from "./user.model";

export interface IPortfolio {
  name: string;
  description: string;
  technology: string[];
  demo: ILink;
  highlight?: string[];
}