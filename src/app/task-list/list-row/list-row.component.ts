import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  id: number;

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteTask() {
    this.deleteTaskEmitter.emit(this.task.name);
  }
}
