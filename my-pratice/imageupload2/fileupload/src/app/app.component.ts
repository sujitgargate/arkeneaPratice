import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import { FileUploader } from 'ng2-file-upload';
// const URL = 'http://localhost:8080/api/upload';

const URL = 'http://localhost:8080/api/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  // public uploader: FileUploader = new FileUploader({
  //   url: URL,
  //   itemAlias: 'image'
  // } );
  public uploader: FileUploader = new FileUploader({ url: `${URL}` });
  public hasBaseDropZoneOver: boolean = false;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
   
  }

  public FileOverBase(e: any): void {    
    this.hasBaseDropZoneOver = e;
    if (this.uploader.getNotUploadedItems().length) {
      this.uploader.onBeforeUploadItem = (item) => {   
        console.log(' onBeforeUploadItem file>>>>',item)
      }
    }
    this.uploader.onAfterAddingFile = (file) => {
      console.log('onAfterAddingFile file>>>>',file)
      file.withCredentials = false;
    };    
    
    this.uploader.uploadAll();

    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details: >>>', item);
      this.toastr.success('File successfully uploaded!');
    };

  }

}

  
