import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { routings } from "app/app.routing";
import { QueueItemComponent } from './layout/queue-item/queue-item.component';
import { AdminControlsComponent } from './admin-controls/admin-controls.component';

import { ThaiDatePipe } from "app/shared/thaidate";
import { QueueService } from "app/layout/shared/Queue.service";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    QueueItemComponent,
    AdminControlsComponent,
    ThaiDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routings
  ],
  providers: [
    QueueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
