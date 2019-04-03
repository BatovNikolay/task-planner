import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskStatus } from '../model/task-status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  filter: boolean;

  correctTask = true;

  private indexEdit: number;

  taskEdit: Task;

  tasks: Task[] = [
    new Task(
      'Task 1',
      'Category 1',
      TaskStatus.FINISH,
      '01.02.2002',
      '01.03.2002'
    ),
    new Task(
      'Task 2',
      'Category 3',
      TaskStatus.IN_PROGRESS,
      '21.02.2002'
    ),
    new Task(
      'Task 3',
      'Category 2',
      TaskStatus.PLANED,
      '21.02.2002'
    ),
    new Task(
      'Task 4',
      'Category 3',
      TaskStatus.IN_PROGRESS,
      '21.02.2002'
    ),
    new Task(
      'Task 5',
      'Category 2',
      TaskStatus.IN_PROGRESS,
      '21.02.2002'
    ),
    new Task(
      'Task 6',
      'Category 1',
      TaskStatus.OVERDUE,
      '21.02.2002'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  filterTasks($event) {
    this.filter = $event.target.checked;
  }

  getTasksWithFilter() {
    return this.filter ? this.tasks.filter(task => task.status !== TaskStatus.FINISH) : this.tasks;
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

  addTask(task: Task) {
    this.tasks.push(task);
  }

  setCorrectTask(correctTask: boolean) {
    this.correctTask = correctTask;
  }

  editTask(task: Task, id: number) {
    this.correctTask = false;
    this.indexEdit = id;
    this.taskEdit = Object.assign({}, task);
  }

  replaceTask(task: Task) {
    console.log(task);
    this.tasks[this.indexEdit] = task;
    this.correctTask = true;
  }
}
