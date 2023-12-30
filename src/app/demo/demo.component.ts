import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public text : string = "";

  public upperCase() : string {
    this.text = "MAREVELLOUS INFOSYSTEMS";
    return this.text;
  }
  
  public lowerCase() : string {
    this.text = "marvellous infosystems";
    return this.text;
  }
}
