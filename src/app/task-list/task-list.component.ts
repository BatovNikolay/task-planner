import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  filter: boolean;

  tasks = [
    {
      name: 'Task 1',
      category: 'Category 1',
      dateStart: '01.02.2002',
      dateEnd: '01.03.2002',
      status: 'Finish'
    },
    {
      name: 'Task 2',
      category: 'Category 3',
      dateStart: '21.02.2002',
      dateEnd: '',
      status: 'In progress'
    },
    {
      name: 'Task 3',
      category: 'Category 2',
      dateStart: '21.02.2002',
      dateEnd: '',
      status: 'Planed'
    },
    {
      name: 'Task 4',
      category: 'Category 3',
      dateStart: '21.02.2002',
      dateEnd: '',
      status: 'In progress'
    },
    {
      name: 'Task 5',
      category: 'Category 2',
      dateStart: '21.02.2002',
      dateEnd: '',
      status: 'In progress'
    },
    {
      name: 'Task 6',
      category: 'Category 1',
      dateStart: '21.02.2002',
      dateEnd: '',
      status: 'Overdue'
    }
  ];

  constructor() { }

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
