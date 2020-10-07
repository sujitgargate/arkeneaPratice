import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Injectable, OnInit, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  uploadFiles
  images

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  DateOfBirth: any;

  constructor(private fb: FormBuilder, private emplpoyeeService: EmployeeService,
    private router: Router,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

  }

  ngOnInit(): void {
    //debugger;
    //console.log(this.data);

    if (this.data) {
      console.log(this.data);

      this.employeeForm = this.fb.group({
        //_id: [this.data._id],
        name: [this.data.name, Validators.required],
        address: [this.data.address, Validators.required],
        emailAddress: [this.data.emailAddress, Validators.required],
        phoneNumber: [this.data.phoneNumber, Validators.required],  //modify here to date of birth
        DateOfBirth: [this.data.DateOfBirth],
        file: [this.data.imageUrl, Validators.required]
      })
    }
    else {
      this.employeeForm = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        emailAddress: ['', Validators.required],
        file: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        DateOfBirth: [this.DateOfBirth]
      });
    }


  }
  add(event: MatChipInputEvent): void {
    console.log("event>>>>>>>>" + event);

    //debugger;
    const input = event.input;
    const value = event.value;

    if (input) {
      input.value = '';
    }
  }


  createEmployee() {

    this.emplpoyeeService.add(this.employeeForm.value, this.images).subscribe(res => {
      console.log(res);
      this.router.navigate(['list'])

    })
  }

  updateEmployee() {
    this.emplpoyeeService.update(this.employeeForm.value, this.images).subscribe(res => {
      console.log(res);
      this.router.navigate(['list'])

    })
  }
    // deleteEmployee() {
    //   this.emplpoyeeService.delete(this.employeeForm.value._id).subscribe(res => {
    //     console.log(res);
    //     this.router.navigate(['list'])

    //   })
    // }
  fileChange(element) {
    const uploadFiles = element.target.files[0];
    this.images = uploadFiles
  }
}
