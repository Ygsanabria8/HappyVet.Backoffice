import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() buttonTitle!: string;
  @Input() disabled!: boolean;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  emitClick(): void {
    this.onClick.emit(true)
  }
}
