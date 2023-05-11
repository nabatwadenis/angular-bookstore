import { NgModule } from "@angular/core";
import { BrowserModule} from '@angular/platform-browser';
import  {AppComponent} from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";




@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, BooksModule, RouterModule, AppRoutingModule,AuthModule],
    bootstrap: [AppComponent],
})

export class AppModule{
    
}