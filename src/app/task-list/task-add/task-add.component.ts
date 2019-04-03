import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../model/task.model';
import { TaskStatus } from '../../model/task-status.enum';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  name: string;

  category: string;

  startDate: string;

  endDate: string;

  @Output()
  taskEmit = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit() {
  }

  addTask() {
    this.taskEmit.emit(
      new Task(
        this.name,
        this.category,
        TaskStatus.PLANED,
        this.startDate,
        this.endDate)
    );
    this.name = null;
    this.category = null;
    this.startDate = null;
    this.endDate = null;
  }
}
