import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 1192,
  title: 'recording or citizen',
};

export const sampleWithPartialData: ITask = {
  id: 10576,
  title: 'or meanwhile outstanding',
  dueDate: dayjs('2024-08-16'),
};

export const sampleWithFullData: ITask = {
  id: 26562,
  title: 'meanwhile yowza fondly',
  description: 'whoa gee',
  dueDate: dayjs('2024-08-17'),
  completed: true,
};

export const sampleWithNewData: NewTask = {
  title: 'but round',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
