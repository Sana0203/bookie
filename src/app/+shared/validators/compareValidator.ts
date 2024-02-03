import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function compareValidator(sourceControl: AbstractControl, match:AbstractControl): ValidatorFn {
    return (sourceControl: AbstractControl): ValidationErrors | null => {
      return (sourceControl.value !== match.value) ? {error: {value: sourceControl.value}} :null;
    };
  }