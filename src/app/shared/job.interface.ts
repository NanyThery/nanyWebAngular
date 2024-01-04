export interface Job {
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
