import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  filter: boolean;

  tasks: Task[] = [
    new Task(
      'Task 1',
      'Category 1',
      'Finish',
      '01.02.2002',
      '01.03.2002'
    ),
    new Task(
      'Task 2',
      'Category 3',
      'In progress',
      '21.02.2002'
    ),
    new Task(
      'Task 3',
      'Category 2',
      'Planed',
      '21.02.2002'
    ),
    new Task(
      'Task 4',
      'Category 3',
      'In progress',
      '21.02.2002'
    ),
    new Task(
      'Task 5',
      'Category 2',
      'In progress',
      '21.02.2002'
    ),
    new Task(
      'Task 6',
      'Category 1',
      'Overdue',
      '21.02.2002'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addTask() {
    console.log('Task created!');
  }

  filterTasks($event) {
    this.filter = $event.target.checked;
  }

  getTasksWithFilter() {
    return this.filter ? this.tasks.filter(task => task.status !== 'Finish') : this.tasks;
  }

  getTaskListSize() {
    return this.tasks.length;
  }

  deleteTaskFromArray(name: string) {
    this.tasks = this.tasks.filter(task => task.name !== name);
  }

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }
}
