import { Ticket } from '../models/ticket';
import { Student } from '../models/student';
import { STUDENTS_MOCKED } from './student.mock';


const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Mordor',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: 'SI',
    archived: false
  },
  {
    title: 'SI5 in Tatooine',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: 'GE',
    archived: false
  },
];
