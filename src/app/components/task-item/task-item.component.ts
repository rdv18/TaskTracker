import { Component , Input,Output, OnInit,EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent{

  faTimes=faTimes;
  @Input()
  task!:Task;

  @Output()
  onDeleteTask:EventEmitter<Task>=new EventEmitter();

  @Output()
  onToggle:EventEmitter<Task>=new EventEmitter();

  onDelete(task:Task){
    console.log(task);
    this.onDeleteTask.emit();
  }

  onToggleTask(task:Task)
  {
    console.log("Toggle task");
    this.onToggle.emit();

  }

  

}
