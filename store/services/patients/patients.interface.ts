export interface PatientEntity {
  id: number | string;
  patientCode: string;
  title: string;
  genderType: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string | Date;
  stateOfOriginId?: number;
  countryId?: number;
  address: string;
  otherIdType?: string;
  otherIdNumber?: string;
  ethnicity?: string;
  religion?: string;
  maritalStatus?: string;
  bloodGroup?: string;
  bloodGenotype?: string;
  middleName?: string;
  emailAddress?: string;
  relations?: PatientRelationEntity[];
}

export interface PatientRelationEntity {
  id: number | string;
  relationship: string;
  firstName: string;
  middleName: string;
  lastName: string;
  title: string;
  address: string;
  phoneNumber: string;
  email: string;
  isGuardian: boolean;
  otherIDType: string;
  otherIDNumber: string;
}