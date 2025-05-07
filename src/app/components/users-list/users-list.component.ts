import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  userSelectedIndex: number | undefined;

  @Input({ required: true }) usersListUserC: UsersListResponse = [];

  @Output() onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(index: number) {
    this.userSelectedIndex = index;
    this.onUserSelectedEmitt.emit(index);
  }
}
