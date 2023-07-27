import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  sentences: string[] = ['Soyez au premier plan de l\'innovation pharmaceutique avec Mapharma ',
    ' connectez-vous aux besoins de vos clients, où qu\'ils soient !'];
  currentIndex: number = 0;
  currentSentence: string = '';
  style : boolean = false

  ngAfterViewInit() {
    this.writeSentences();
  }

  writeSentences() {
    this.currentSentence = this.sentences[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.sentences.length;
    setTimeout(() => this.writeSentences(), 3000); // Délai de 1 seconde entre chaque phrase
  }
}

