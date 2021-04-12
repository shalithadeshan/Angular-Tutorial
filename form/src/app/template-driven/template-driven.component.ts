import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  defaultQuestion = 'pet';
  @ViewChild('formElement') signupForm: NgForm;
  answer = '';
  genders = ['Male', 'Female', 'Other'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName(): void {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // }); // setting form values not the best approach
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    }); // patching data
  }
  constructor() { }

  ngOnInit(): void {
  }
  // onSubmit(formElement: NgForm): void {
  //   console.log(formElement);
  // }

  onSubmit(): void { // extract data
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
    // console.log(this.signupForm);
  } // another way getting access to the code
}
