import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { SplashComponent } from './splash/splash.component';
import { WorkspaceComponent } from './shell/workspace/workspace.component';
import { EditingAreaComponent } from './shell/editing-area/editing-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShellComponent,
    SplashComponent,
    WorkspaceComponent,
    EditingAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
