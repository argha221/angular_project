import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FrontComponent } from '../front/front.component';
import { HomComponent } from '../hom/hom.component';
import { ChildComponent } from '../child/child.component';
import { LogComponent } from '../log/log.component';



@NgModule({
  declarations:[LogComponent],
  imports: [
   CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],

  exports:[   CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,],

    
})


export class SharModule { }
