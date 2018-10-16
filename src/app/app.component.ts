import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';

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

  addComponent(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.container.createComponent(componentFactory);
  }

  addCardComponent() {
    this.addComponent(CardComponent);
  }

  showDetails() {
    this.addComponent(DetailsComponent);
  }
}
