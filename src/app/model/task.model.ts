export class Task {

  constructor(
    public name: string,
    public category: string,
    public status: string = 'Planed',
    public dateStart?: string,
    public dateEnd?: string
  ) {}
}
