import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  standalone: false,
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
  @Input() isInEditMode: boolean = false;
  
  @Output() onEditButtonEmitt = new EventEmitter<void>();
  @Output() onCancelButtonEmitt = new EventEmitter<void>();

  onCancelButton() {
    this.onCancelButtonEmitt.emit();
  }
  onEditButton() {
    this.onEditButtonEmitt.emit();
  }
}
