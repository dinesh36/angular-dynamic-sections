import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SectionComponent} from './modules/resizable-sections/components/section/section.component';
import {SectionsComponent} from './modules/resizable-sections/components/sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SectionsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
