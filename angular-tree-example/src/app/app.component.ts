import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeDemoComponent } from './tree-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TreeDemoComponent],
  template: `
    <app-tree-demo></app-tree-demo>
  `
})
export class AppComponent {
  title = 'angular-tree-example';
}
