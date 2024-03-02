import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTaskButton!:Boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService){
    this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTaskButton=value));

  }

  toggleAddTask(){
    console.log("Adding task in header component");
    this.uiService.toggleAddTask();
  }

}
