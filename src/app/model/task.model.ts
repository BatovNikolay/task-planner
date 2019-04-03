import { TaskStatus } from './task-status.enum';

export class Task {

  constructor(
    public name: string,
    public category: string,
    public status: TaskStatus = TaskStatus.PLANED,
    public dateStart?: string,
    public dateEnd?: string
  ) {}
}
