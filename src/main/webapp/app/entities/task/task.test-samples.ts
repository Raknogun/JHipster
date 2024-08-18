import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 11617,
  title: 'consequently though',
};

export const sampleWithPartialData: ITask = {
  id: 9393,
  title: 'ignorant',
  description: 'mmm',
};

export const sampleWithFullData: ITask = {
  id: 27561,
  title: 'fooey conscious',
  description: 'aside epitomize once',
  dueDate: dayjs('2024-08-16'),
  completed: true,
};

export const sampleWithNewData: NewTask = {
  title: 'to',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
