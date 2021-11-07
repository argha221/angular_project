import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { AppComponent } from './app.component';
import { AthGuard } from './ath.guard';
import { AutheGuard } from './authe.guard';
import { BasicComponent } from './basic/basic.component';
import { ChilComponent } from './chil/chil.component';
import { ChildComponent } from './child/child.component';
import { CusapiComponent } from './cusapi/cusapi.component';
import { FoundComponent } from './found/found.component';
import { FrontComponent } from './front/front.component';
import { HomComponent } from './hom/hom.component';
import { LasGuard } from './las.guard';
import { LogComponent } from './log/log.component';
import { LolGuard } from './lol.guard';
import { MatComponent } from './mat/mat.component';

import { NfrComponent } from './nfr/nfr.component';
import { ParentComponent } from './parent/parent.component';
import { QueryComponent } from './query/query.component';
import { SmartComponent } from './smart/smart.component';
import { SubjotComponent } from './subjot/subjot.component';



const routes: Routes = [
  {path:'',redirectTo:'front',pathMatch:'full'},
  {path: 'front' ,component:FrontComponent},
  {path:'hom' , component:HomComponent,
  children:[
  {path:'child' , component:ChildComponent}]
    },
    {path:'basic',component:BasicComponent},
{path:'nfr',component:NfrComponent},


    {path:'nfr', canActivate:[AutheGuard],
    children:[
    {path:'cusapi',component:CusapiComponent} ]
    },
    
    {path:'par',component:ParentComponent},
   {path:'chil',component:ChilComponent},

   
    {path:'', redirectTo:'nfr',pathMatch:'full'},
    {path:'api',component:ApiComponent},
{path:'subjot',component:SubjotComponent},
{path:'log',component:LogComponent},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: 'settings', canLoad:[LolGuard], loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  {path:'smart',component:SmartComponent},
  // { path: '**', redirectTo:'front',pathMatch:'full' }
  
 {path:'query', component:QueryComponent},
 {path:'mat',component:MatComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// children
//   {path:'hom' , component:HomComponent}]},
    