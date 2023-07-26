
import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: "full"},

]
@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
