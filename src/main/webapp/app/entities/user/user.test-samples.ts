import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20708,
  login: 'O',
};

export const sampleWithPartialData: IUser = {
  id: 15405,
  login: 'ht',
};

export const sampleWithFullData: IUser = {
  id: 18445,
  login: '$I{qF`@4QpI-\\;GKki\\~h\\!aoRhI\\pHb3Gw',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
