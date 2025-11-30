import { TCMSMedia } from "./common";

export type TCMSWork = {
  id: string;
  position: string;
  company: string;
  startYear: string;
  endYear?: string;
  companyUrl?: string;
  logo?: TCMSMedia;
  description?: string;
  linkedinUrl?: string;
};
