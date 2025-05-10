import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './models/task';
import { User } from '../user/models/user';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get tasks(): Task[] | [] {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddTask(): void {
    this.isAddingTask = true;
  }
  onAddTaskDialogClosed(): void {
    this.isAddingTask = false;
  }
}
