import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { User } from './models/user';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  // @Input({ required: true }) user!: User;
  selected = input.required<boolean>();
  user = input.required<User>();
  avatarPath = computed(() => 'users/' + this.user().avatar);
  @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();
  // userSelected = output<string>();
  // get avatarPath() {
  //   return 'users/' + this.user().avatar;
  // }
  onSelectUser() {
    this.userSelected.emit(this.user().id);
  }
  ngOnInit(): void {
    //
  }
}
