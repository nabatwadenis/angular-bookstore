import { Component, Input } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:Book ={} as Book;


  flipped: boolean = false;

  flipCard(isFlipped: boolean) {
    this.flipped = isFlipped;
  }

  addToCart(){
    console.log(this.book)

  }

}
