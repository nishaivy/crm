import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';



@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ListUsersComponent,
    CardFancyExampleComponent
  ]
})
export class UsersModule { }
