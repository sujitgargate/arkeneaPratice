import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Injectable, OnInit, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  uploadFiles: any
  images: any

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  dateOfBirth: Date;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router,
    public dialogRef: MatDialogRef<EmployeeCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }


  ngOnInit(): void {
    if (this.data) {
      this.employeeForm = this.fb.group({
        _id: [this.data._id],
        name: [this.data.name, Validators.required],
        address: [this.data.address, Validators.required],
        emailAddress: [this.data.emailAddress, Validators.required],
        file: [this.data.imageUrl, Validators.required],
        phoneNumber: [this.data.phoneNumber, Validators.required],
        dateOfBirth: [this.data.dateOfBirth]
      })
    }
    else {
      this.employeeForm = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        emailAddress: ['', Validators.required],
        file: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        dateOfBirth: [this.dateOfBirth]
      });
    }

  }

  createEmployee() {
    this.employeeService.add(this.employeeForm.value, this.images).subscribe(res => {
      console.log(res);
      this.router.navigate(['list'])

    })
  }

  updateEmployee() {
    this.employeeService.update(this.employeeForm.value, this.images).subscribe(res => {
      console.log(res);
      this.router.navigate(['list'])

    })
  }
  deleteEmployee() {
    this.employeeService.delete(this.employeeForm.value._id).subscribe(res => {
      console.log(res);
      this.router.navigate(['list'])

    })
  }
  fileChange(element) {
    const uploadFiles = element.target.files[0];
    this.images = uploadFiles
  }

}
