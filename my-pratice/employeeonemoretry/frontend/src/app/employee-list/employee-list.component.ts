import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../services/employee.service'
import {MatDialog} from '@angular/material/dialog';
import {EmployeeCreateComponent} from '../employee-create/employee-create.component'
import {MatPaginator} from '@angular/material/paginator';

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
  displayedColumns: string[] = [ 'id', 'name', 'address', 'emailAddress', 'phoneNumber', 'dateOfBirth'];
  
  constructor(private recipeService: EmployeeService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }




  
  searchByName(){
    if(this.search == ""){
      return this.getList()
    }
    var searchModel = {
      name:this.search
    }
    this.recipeService.search(searchModel).subscribe((res)=>{
    this.dataSource = [res]
    console.log([res]);

    })

  }

  getList(){
    this.recipeService.get().subscribe((res)=>{
      this.dataSource = res
    })
  }

  ngOnInit(): void {
    this.getList();
  }



}
