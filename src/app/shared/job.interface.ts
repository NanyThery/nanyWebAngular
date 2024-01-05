export interface Job {
  print: boolean;
  organization: {
    name: string;
    logo?: string;
  };
  roles: {
    name: string;
    description?: string;
    startDate: string;
    finishDate?: string;
    skills?: string[];
  }[];
}
