import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-dynamic-component';
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadMore() {
    this.addCardComponent();
  }

  addCardComponent() {
    const cardComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
    this.container.createComponent(cardComponentFactory);
  }
}
