import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ADD_POSITIONS, ISection} from '../../shared/constants';
import {ResizeEvent} from "angular-resizable-element";

@Component({
  selector: 'app-resizable-section',
  templateUrl: './resizable-section.component.html',
  styleUrls: ['./resizable-section.component.scss']
})
export class ResizableSectionComponent {
  @Input() section: ISection = {id: ''};
  @Input() sectionIndex = 0;
  @Output() onAddSection = new EventEmitter();
  ADD_POSITIONS = ADD_POSITIONS;

  emitAddSection(position: string): void{
    this.onAddSection.emit({position, sectionIndex: this.sectionIndex});
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }
}
