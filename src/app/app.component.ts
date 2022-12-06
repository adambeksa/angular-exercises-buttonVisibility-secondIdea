import { Component } from '@angular/core';
import { Observable, of, startWith } from 'rxjs';
import { addToCartVisibiltyService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonVisibility$: Observable<boolean>;

  constructor(private addToCartVisibiltyService: addToCartVisibiltyService) {}

  ngOnInit() {
    this.setAddToCartVisiblity();
  }

  //Utworzyłem poniższą funkcję ponieważ nie wiedziałem
  //jak ustawić wartość domyślną Observable<boolean>
  setAddToCartVisiblity(): void {
    this.buttonVisibility$ = of(true);
  }

  addToCart(): void {
    this.hideAddToCartButtonForFourSeconds();
  }

  private hideAddToCartButtonForFourSeconds(): void {
    this.buttonVisibility$ =
      this.addToCartVisibiltyService.hideAddToCartButtonForFourSeconds();
  }
}
