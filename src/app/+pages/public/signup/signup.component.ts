import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder,FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'bookie-signup',
  standalone: true,
  //providers: [ provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    AsyncPipe,
    MatDatepickerModule,
    MatInputModule, 
    MatDatepickerModule, 
    MatIconModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  hide = true;
  
  constructor(private fb: FormBuilder) { }

  //form group builder
  signupForm = this.fb.group({

  name: ['',[Validators.required,Validators.pattern('^[A-Z a-z]+$')]],

  bdate: ['',Validators.pattern('')],

  email: ['',[Validators.required,Validators.email]],

  username: ['',[Validators.required,
              Validators.pattern("^[\\w]+(.|_)*[\\w]+$"),
              Validators.maxLength(10)]],

  telphone: ['', [
     Validators.pattern("^((\\+[1-9]{1,2})|00[1-9]{1,2})? ?[0-9]{3} ?-? ?[0-9]{3} ?-?[0-9]{4}$")]],

  password: ['', [Validators.required,
     Validators.minLength(8) , 
     Validators.pattern("^(?=.*[A-Z])(?=.*[\\W]).+$")]],
  
  passConfirm: ['',[Validators.required]]
  

  });
  //  ,{
  //   validator: this.compareValidator
  // });

  private BreakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.BreakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


 compareValidator(control:AbstractControl): Validators {
  const sourceControl = control.get('password')?.value;
  const match = control.get('passConfirm')?.value;
  return (control: AbstractControl): ValidationErrors | null => {
    return (sourceControl.value !== match.value) ? {error: {value: sourceControl.value}} :null;
  };
}

}

