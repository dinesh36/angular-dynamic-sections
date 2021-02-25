import { Component } from '@angular/core';
import {ADD_POSITIONS, ISection} from '../../shared/constants';


@Component({
  selector: 'app-resizable-sections',
  templateUrl: './resizable-sections.component.html',
  styleUrls: ['./resizable-sections.component.scss']
})
export class ResizableSectionsComponent {
  sections: Array<ISection> = [{id: this.getRandomId()}, {id: this.getRandomId()}];

  getRandomId(length?: number): string {
    length = length || 30;
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  addSection({sectionIndex, position}: {sectionIndex: number, position: string}): void{
     if (position === ADD_POSITIONS.TOP){
       this.sections.splice(sectionIndex, 0, {id: this.getRandomId()});
     } else {
       this.sections.splice(sectionIndex + 1 , 0, {id: this.getRandomId()});
     }
  }
}
