import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  
  get f() {
    return this.loginForm.controls;
  }

  matcher = new MyErrorStateMatcher();

  login(): void {
    // if(this.loginForm.invalid) {}
    this.loginService.login(this.loginForm.get("emailFormControl")?.value, this.loginForm.get("passwordFormControl")?.value).pipe(first())
    .subscribe(
      (success: any) => {
        console.log("loggedIn", success);
        this.router.navigate(['/'])
      },
      (error: any) => {
        console.log("error")
      }
    )
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
