import {MaBenhAn} from './ma-benh-an';
import {MaBenhNhan} from './ma-benh-nhan';

export interface BenhAn {
  id: number;
  patientCode?: MaBenhAn;
  patientPerson?: MaBenhNhan;
  name?: string;
  hospitalized?: string;
  discharge?: string;
  reason?: string;
  cure?: string;
  doctor?: string;
}
