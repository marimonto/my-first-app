import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UiComponentsModule } from './components/ui-components.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, UiComponentsModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
