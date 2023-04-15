
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./views/accueil/accueil.component";
import {NgModule} from "@angular/core";
import {ImportExportComponent} from "./views/import-export/import-export.component";


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: "full"},
  { path: 'accueil', component: AccueilComponent ,},
  { path: 'importExport', component: ImportExportComponent ,},

]
@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
