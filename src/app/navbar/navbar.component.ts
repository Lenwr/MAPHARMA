import {Component, HostListener, OnInit} from '@angular/core';
import {DevisComponent} from "./devis/devis.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    ngOnInit(): void {
      this.isMobile = window.innerWidth < 768;
    }
constructor(private matDialog : MatDialog) {
}
   isMobile: boolean = false ;
   menu: boolean =  false

  panelOpenState = false;
  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.isMobile = window.innerWidth < 768;
    console.log(this.isMobile)
  }
  openDialog(){
    this.matDialog.open(DevisComponent,{
      width : '350px' ,
      height : '500px'

    })
  }


}
