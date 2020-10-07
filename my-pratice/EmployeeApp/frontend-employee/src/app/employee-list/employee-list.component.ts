import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service'
import { MatDialog } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component'
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data
  dataSource
  search
  displayedColumns: string[] = [ 'image', 'name', 'address', 'emailAddress', 'phoneNumber', 'DateOfBirth'];
  //'_id',
  constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

  openDialog() {
    console.log(CreateEmployeeComponent);
    
    const dialogRef = this.dialog.open(CreateEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogForEdit(id) {
    console.log('testid', id);

    this.employeeService.getById(id).subscribe((res) => {
      console.log(res);
      this.data = res
      console.log(this.data);

      const dialogRef = this.dialog.open(CreateEmployeeComponent, { data: this.data });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    })
  }

  searchByName() {
    if (this.search == "") {
      return this.getList()
    }
    var searchModel = {
      name: this.search
    }
    this.employeeService.search(searchModel).subscribe((res) => {
      this.dataSource = [res]
      console.log([res]);
    })

  }

  getList() {
    this.employeeService.get().subscribe((res) => {
      this.dataSource = res
    })
  }

  ngOnInit(): void {
    this.getList();
  }

}
