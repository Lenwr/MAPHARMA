import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    ngOnInit(): void {
      this.isMobile = window.innerWidth < 768;
    }
   isMobile: boolean = false ;
   menu: boolean =  false

  panelOpenState = false;
  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.isMobile = window.innerWidth < 768;
    console.log(this.isMobile)
  }
}
