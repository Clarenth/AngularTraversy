// Libraries
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Styles
import { faTimes, } from '@fortawesome/free-solid-svg-icons'

// Interface
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit 
{
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;

  ngOnInit(): void {}

  // icons
  faTimes = faTimes;

  constructor() {}

  onDelete(task:Task) 
  {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) 
  {
    this.onToggleReminder.emit(task)
  }

}
