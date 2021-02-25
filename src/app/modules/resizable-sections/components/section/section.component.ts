import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ADD_POSITIONS, ISection} from '../../shared/constants';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() section: ISection = {id: '', imagePath: ''};
  @Input() sectionIndex = 0;
  @Output() onAddSection = new EventEmitter();
  ADD_POSITIONS = ADD_POSITIONS;

  emitAddSection(position: string): void{
    this.onAddSection.emit({position, sectionIndex: this.sectionIndex});
  }
}
