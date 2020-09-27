import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppresssionComponent } from './suppresssion/suppresssion.component';
import { TargetListComponent } from './target-list/target-list.component';


const routes : Routes = [
  {path : "suppression", component : SuppresssionComponent},
  {path : "targetlist", component : TargetListComponent},
  // { path: '**', component: PageNotFoundComponent },
  {path : "", redirectTo :"suppression", pathMatch : "full"}	
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
