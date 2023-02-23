import { Student } from '../models/student';

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: string;
  archived: boolean;
}
