import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilityModule } from './utility/utility.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,WidgetsModule,UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
