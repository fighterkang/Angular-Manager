import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './model/app-routing.module';

// 第三方组件
import { CKEditorModule } from 'ng2-ckeditor';

// 自己的组件
import { UserFormComponent } from './user-form/user-form.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ManagerPostComponent } from './manager-post/manager-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ManagerTodoComponent } from './manager-todo/manager-todo.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LeftNavComponent,
    AddPostComponent,
    ManagerPostComponent,
    EditPostComponent,
    ManagerTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
