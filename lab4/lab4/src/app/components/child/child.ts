import { Component, Input } from '@angular/core';
import { EventEmitter, input, Output, output } from '@angular/core';
import { SharedService } from '../../shared-service';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() username!: string;

  @Output() messageEvent = new EventEmitter<string>();
  constructor(public sharedService: SharedService) {
    this.sharedService.sharing();
  }

  sendMessage() {
    const zero = `12345`;
    this.messageEvent.emit(zero);
  }
}
