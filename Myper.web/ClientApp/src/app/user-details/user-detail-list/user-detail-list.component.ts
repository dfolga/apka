import { Component, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styles: []
})
export class UserDetailListComponent implements OnInit {


  constructor(public service: UserDetailService,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: UserDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(UserId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteUserDetail(UserId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'User Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
