import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SuppresssionComponent } from './suppresssion/suppresssion.component';
import { TargetListComponent } from './target-list/target-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomPaginationComponent,
    SuppresssionComponent,
    TargetListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
