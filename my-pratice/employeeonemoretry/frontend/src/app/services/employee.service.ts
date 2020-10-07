import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private _http: HttpClient) { }


  add(employee: any, file: File) {

    const formData = new FormData();

    formData.append('file', file);
    formData.append('name', employee.name);
    formData.append('address', employee.address);
    formData.append('emailAddress', employee.emailAddress)
    formData.append('phoneNumber', employee.phoneNumber)
    formData.append('dateOfBirth', employee.dateOfBirth)

    return this._http.post('http://localhost:5000/employee', formData);
  }


  get() {
    return this._http.get('http://localhost:5000/employee');
  }

  getById(id) {
    console.log(id);

    return this._http.get('http://localhost:5000/employee/' + id)
  }


  update(employee: any, file:File) {

    const formData = new FormData();

    formData.append('file', file);
    formData.append('name', employee.name);
    formData.append('address', employee.address);
    formData.append('emailAddress', employee.emailAddress)
    formData.append('phoneNumber', employee.phoneNumber)
    formData.append('dateOfBirth', employee.dateOfBirth)
    formData.append('_id', employee._id)


    return this._http.put('http://localhost:5000/recipe',formData);
  }



  delete(id){
    return this._http.delete('http://localhost:5000/employee/'+id)
  }

  search(search){
    console.log(search);
    return this._http.post('http://localhost:5000/employee/search', search)
  }

}
