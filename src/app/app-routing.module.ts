
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./views/accueil/accueil.component";
import {NgModule} from "@angular/core";
import {ImportExportComponent} from "./views/import-export/import-export.component";
import {TransitDouaneComponent} from "./views/transit-douane/transit-douane.component";
import {TransportLogistiqueComponent} from "./views/transport-logistique/transport-logistique.component";


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: "full"},
  { path: 'accueil', component: AccueilComponent ,},
  { path: 'importExport', component: ImportExportComponent ,},
  { path: 'transit', component: TransitDouaneComponent ,},
  { path: 'transport', component: TransportLogistiqueComponent ,},

]
@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
