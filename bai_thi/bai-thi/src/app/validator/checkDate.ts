import {AbstractControl} from '@angular/forms';

export function checkDate(control: AbstractControl) {
  const ngayNhapVien = new Date(control.value.ngayNhapVien);
  const ngayRaVien = new Date(control.value.ngayRaVien);
  if (ngayNhapVien.getTime() > ngayRaVien.getTime()) {
    return {checkDateOut: true};
  }
  return null;
}
