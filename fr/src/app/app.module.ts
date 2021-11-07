import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} 
from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { SharModule } from './shar/shar.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { HomComponent } from './hom/hom.component';
import { ChildComponent } from './child/child.component';
import { FoundComponent } from './found/found.component';
import { BasicComponent } from './basic/basic.component';
import { ApiComponent } from './api/api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CusapiComponent } from './cusapi/cusapi.component';
import { NfrComponent } from './nfr/nfr.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { ChilComponent } from './chil/chil.component';
import { CuspipePipe } from './cuspipe.pipe';
import { PolDirective } from './pol.directive';
import { LoadInterceptor } from './load.interceptor';
import { AutheGuard } from './authe.guard';
import { SubjotComponent } from './subjot/subjot.component';
import { LogComponent } from './log/log.component';
import { StoreModule } from '@ngrx/store';

import { UserComponent } from './user/user.component';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { QueryComponent } from './query/query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponent } from './mat/mat.component';
import {MatButtonModule} from '@angular/material/button';








@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    HomComponent,
    ChildComponent,
    FoundComponent,
    BasicComponent,
    ApiComponent,
    CusapiComponent,
    NfrComponent,
    FooterComponent,
    ParentComponent,
    ChilComponent,
    CuspipePipe,
    PolDirective,
    SubjotComponent,
    
    UserComponent,
    SmartComponent,
    DumbComponent,
    QueryComponent,
    MatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
   
   
    SharModule,
   
   
    BrowserAnimationsModule,
   MatButtonModule
  
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:LoadInterceptor,multi:true},AutheGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



