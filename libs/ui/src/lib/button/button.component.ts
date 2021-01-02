import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Button, Role } from '@sernanp/models';


@Component({
  selector: 'sernanp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements Button, OnInit {

  @Input() text: string;
  @Input() role : Role = 'default';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  notify() {
    this.clicked.emit(true);
  }

  ngOnInit(): void {
  }

}
