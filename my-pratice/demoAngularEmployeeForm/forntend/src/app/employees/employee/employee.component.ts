import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [{ id: 1, value: 'Dep 1' },
               { id: 2, value: 'Dep 2' },
               { id: 3, value: 'Dep 3' }];
  form: any;

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
  }

  onClear() {
    let $key = this.service.form.get('$key').value;
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.service.form.patchValue({ $key });
  }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

}
