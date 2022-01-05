import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  private mode: string = 'create';
  userId: string = '';
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.isLoading = true;
        this.mode = 'edit';
        this.userId = paramMap.get('userId')!;
        console.log('After get postId');
        this.userService.findOne(this.userId).subscribe((userData) => {
          this.isLoading = false;
          this.user = {
            id: userData.id,
            nom: userData.nom,
            email: userData.email,
          };
        });
      } else {
        this.mode = 'create';
        this.userId = null;
      }
    });
  }
  ngOnDestroy(): void {
  }

  onSubmit() {
    if (this.mode === 'create') {
      this.userService
        .save(this.user)
        .subscribe((result) => this.gotoUserList());

      console.log('Creating onSavePost');
    } else {
      this.userService
        .update(this.user, this.userId)
        .subscribe((result) => this.gotoUserList());

      console.log('Updating onSavePost');
    }
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
