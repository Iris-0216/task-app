import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/models/user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TasksComponent,
    UserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-app';
  users: User[] = DUMMY_USERS;
  // userName?: string;
  selectedUser?: User;

  onUserSelect(id: string): void {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
