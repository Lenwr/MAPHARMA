
import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ParticulierComponent} from "./particulier/particulier.component";
import {PharmacieComponent} from "./pharmacie/pharmacie.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: "full"},
  { path: 'accueil', component: HomeComponent },
  { path: 'particulier', component: ParticulierComponent },
  { path: 'pharmacie', component: PharmacieComponent },
  { path: 'contact', component: ContactComponent }

]
@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
