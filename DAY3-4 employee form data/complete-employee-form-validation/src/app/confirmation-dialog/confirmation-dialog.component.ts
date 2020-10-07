import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
