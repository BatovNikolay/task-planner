import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  taskEditEmitter = new EventEmitter<Task>();

  @Output()
  cancelEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  editableTask() {
    this.taskEditEmitter.emit(this.task);
  }

  cancel() {
    this.cancelEmitter.emit(true);
  }
}
