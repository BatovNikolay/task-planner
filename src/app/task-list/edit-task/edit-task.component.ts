import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskStatus } from '../../model/task-status.enum';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  task: Task;

  option = Object.keys(TaskStatus);

  @Output()
  taskEditEmitter = new EventEmitter<Task>();

  @Output()
  cancelEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('onInit');
  }

  editableTask() {
    this.taskEditEmitter.emit(this.task);
  }

  cancel() {
    this.cancelEmitter.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  getTaskStatus() {
    return TaskStatus;
  }
}
