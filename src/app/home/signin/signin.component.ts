import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
