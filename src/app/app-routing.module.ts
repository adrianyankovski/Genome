import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstgenomeComponent } from './firstgenome/firstgenome.component';
import { SecondgenomeComponent } from './secondgenome/secondgenome.component';


const routes: Routes = [
  {path:'Firstgenome', component : FirstgenomeComponent},
  {path:'Secondgenome', component:SecondgenomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
