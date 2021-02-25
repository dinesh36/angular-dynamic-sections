import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ResizableSectionComponent} from './modules/resizable-sections/components/resizable-section/resizable-section.component';
import {ResizableSectionsComponent} from './modules/resizable-sections/components/resizable-sections/resizable-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizableSectionComponent,
    ResizableSectionsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
