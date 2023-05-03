import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoLandingComponent } from './todo/todo-landing.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './state/app.reducer';
import { AppEffects } from './state/app.effects';
import { TodoComponent } from './todo/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ErrorAlertComponent } from './shared/error-alert/error-alert.component';
import { TodoFilterComponent } from './todo/todo-filter/todo-filter.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoLandingComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoComponent,
    ErrorAlertComponent,
    TodoFilterComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({app: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
