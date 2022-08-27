import {MaBenhAn} from './ma-benh-an';
import {MaBenhNhan} from './ma-benh-nhan';

export interface BenhAn {
  id: number;
  maBenhAn?: MaBenhAn;
  maBenhNhan?: MaBenhNhan;
  tenBenhNhan?: string;
  ngayNhapVien?: string;
  ngayRaVien?: string;
  lyDoNhapVien?: string;
  phuongPhap?: string;
  bacSi?: string;
}
