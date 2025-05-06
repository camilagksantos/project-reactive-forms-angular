import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/i-user';
import { DependentsList } from '../../types/dependents-list';

@Component({
  selector: 'app-dependents-list',
  standalone: false,
  templateUrl: './dependents-list.component.html',
  styleUrl: './dependents-list.component.scss'
})
export class DependentsListComponent {
  @Input({ required: true }) userDependentsListC: DependentsList = [];
}
