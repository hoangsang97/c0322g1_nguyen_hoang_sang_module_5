import {AbstractControl} from '@angular/forms';

export function checkPoolAreaAndFloors(control: AbstractControl) {
  const poolArea = control.value;
  if (poolArea < 0) {
    return {checkNumber: true};
  }
  return null;
}
