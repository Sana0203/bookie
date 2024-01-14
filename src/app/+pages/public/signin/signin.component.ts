import { Component, inject } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bookie-signin',
  standalone: true,
  imports: [ FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    AsyncPipe
   ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  telFormControl = new FormControl('', [Validators.required, Validators.pattern("^((\\+[1-9]{1,2})|00[1-9]{1,2})? ?[0-9]{3} ?-? ?[0-9]{3} ?-?[0-9]{4}$")]); 
  passFormControl = new FormControl('', [Validators.required, Validators.minLength(8) , Validators.pattern("^(?=.*[A-Z])(?=.*[\\W]).+$")]);
  //passConfirmFormControl = new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[\W_]).+$")]); 
  
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
