import { Component,Input, Output,EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  text!: String;
  @Input()
  color!: String;
  @Output()
  btnClick=new EventEmitter();

  

  onClick(){
    console.log("Emitting button in button component")
    this.btnClick.emit();
    
  }

}
