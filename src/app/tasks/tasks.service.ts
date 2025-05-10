import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask, Task } from './models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = DUMMY_TASKS;
  constructor() {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      this.tasks = JSON.parse(localTasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addNewTask(taskData: NewTask, userId: string): void {
    let newTask = {
      id: new Date().getTime().toString(),
      userId: userId,
      ...taskData,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  removeTask(taskId: string): void {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
