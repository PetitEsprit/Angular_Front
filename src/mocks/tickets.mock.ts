import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Mordor',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'SI',
    archived: false
  },
  {
    title: 'SI5 in Tatooine',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'GE',
    archived: false
  },
];
