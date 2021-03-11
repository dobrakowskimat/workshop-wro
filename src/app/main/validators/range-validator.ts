import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rangeValidator(min = 0, max = 1000): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
      control.value !== null &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { bookValidationFail: true };
    }
    return null;
  };
}
