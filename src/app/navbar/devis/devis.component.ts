import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";



@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
form : any

  constructor( public dialogRef: MatDialogRef<DevisComponent>) { }

  ngOnInit(): void {
  }


}
