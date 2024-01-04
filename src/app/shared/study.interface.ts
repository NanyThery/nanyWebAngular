export interface Study {
  name: string;
  description?: string;
  startDate: string;
  finishDate?: string;
  institution: { name: string; url?: string };
}
