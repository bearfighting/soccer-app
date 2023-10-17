import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './standings/standings.component';
import { MainComponent } from './main/main.component';
import { AccessInterceptor } from './services/access.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
