import { Component } from '@angular/core';

import { Book } from '../types/Book';
 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books:Book[] =[
    {
      name: 'clean code',
      author: 'Robert C Martin',
      image:'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700,
      Info:{
        text: "this book clean code provides practices to writing effective code for development of industry standard softwares",
        rating:"4/5 rating review"
      }
    },
    {
      name: 'HeadFirst Java',
      author: 'Kathy sierra',
      image: 'https://m.media-amazon.com/images/I/41X08AfoP5L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 1000,
      Info:{
        text: "this book head first java offers fundamental java concepts with unique and easy to grasp teaching style",
        rating:"5/5 rating",

      }

    },
    {
      name: 'The pragmatic programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY218_.jpg',
      amount: 1000,
      Info:{
        text:"to develop excellent coding skills and best practices",
        rating:"4/5  rating"
      }

    },
    {
      name: 'SQL quick start guide',
      author: 'Walter Shields',
      image: 'https://m.media-amazon.com/images/I/6113c36jbkL._AC_UY218_.jpg',
      amount: 1000,
      Info:{
        text:"the best database administration career jumpstart",
        rating:"4/5 rating",
      }

    }
  ]
 
  card:Book[] =[];
  

  isDisabled: boolean = false;
  isShowing: boolean = true;





}
