import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'f673d13d-87b7-4e25-b9a7-48acd91b2727',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e947766b-a1ca-4653-85e0-13fa8a14ead1',
};

export const sampleWithFullData: IAuthority = {
  name: '5d5f48da-2fb2-4504-a3d5-a31b416f8d4b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
