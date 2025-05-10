import { Component, inject, Input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewTask } from '../models/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  addTaskDialogClosed = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);
  // constructor(private tasksService: TasksService) { }
  onCloseAddTask(): void {
    this.addTaskDialogClosed.emit();
  }

  onSubmit(ngForm: NgForm): void {
    let newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };
    this.tasksService.addNewTask(newTask, this.userId);
    this.addTaskDialogClosed.emit();
  }
}
