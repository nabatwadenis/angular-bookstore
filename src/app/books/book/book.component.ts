import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private cartService: CartService){}
  @Input() book:Book ={} as Book;
  isInCart: boolean = false;
  


  flipped: boolean = false;

  flipCard(isFlipped: boolean) {
    this.flipped = isFlipped;
  }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  remFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  ngOnInit(): void {
     
  }
  

}
function output(): (target: BookComponent, propertyKey: "emitBook") => void {
  throw new Error('Function not implemented.');
}

