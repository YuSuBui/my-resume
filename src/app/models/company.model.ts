
export interface ICompany {
  name: string;
  startDate: string;
  endDate: string;
  position: string;
}

export interface IWorkingExperience {
  name: string;
  startDate: string;
  endDate: string;
  domain: string;
  technology: string[];
  responsibility: string[];
  achievement?: string[];
}