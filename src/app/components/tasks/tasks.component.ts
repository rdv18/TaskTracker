import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];

  constructor(private taskService:TaskService){

  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id!=task.id));

  }

  onToggleReminder(task:Task)
  {
    task.reminder=!task.reminder;
    console.log(task.reminder);
    this.taskService.updateTask(task).subscribe((task)=>task=task);
    console.log('updated task')

  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>this.tasks.push(task));
  }

}
