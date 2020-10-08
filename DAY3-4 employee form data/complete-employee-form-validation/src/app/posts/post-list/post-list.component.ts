import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

import { PostCreateComponent } from "../post-create/post-create.component";
import { MatDialog } from "@angular/material";
import { ConfirmDialogComponent } from "../../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list-table-component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(public postsService: PostsService, public dialog: MatDialog) {}

  data: any;
  dataSource: Object;
  displayedColumns: string[] = [
    "name",
    "image",
    "phoneNumber",
    "birthdate",
    "address",
    "actions",
  ];

  //Employee:any= [];

  displayAlertOnDeleteEmployee = false;
  displayAlertOnCreateEmployee = false;
  displayAlertOnUpdateEmployee = false;

  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });

    //this.getPosts();
  }

  // getPosts() {
  //   PostsService.get().subscribe((res) => {
  //     this.dataSource = res;
  //   });
  // }

  onDelete(postId: string) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Confirm Remove Employee",
        message: "Are you sure, you want to remove  employee: ",
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.postsService.deletePost(postId);
        this.displayAlertOnDeleteEmployee = true;
      }
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  openDialogForEdit(id: any) {
    console.log("testid", id);

    this.postsService.getPost(id).subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(this.data);

      const dialogRef = this.dialog.open(PostCreateComponent, {
        data: this.data,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
        this.displayAlertOnUpdateEmployee = true;
      });
    });
  }
}
