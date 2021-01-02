import { Component } from '@angular/core';
import { Button, Role } from '@sernanp/models';

@Component({
  selector: 'sernanp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home';
  role: Role = 'warning';
  buttonText = 'Algo esta pasando';

  open(value: boolean){
    console.log(value);
  }

  buttonContent: Partial<Button> = {
    text: 'Algo esta pasando XXX',
    role: 'warning'
  };

}