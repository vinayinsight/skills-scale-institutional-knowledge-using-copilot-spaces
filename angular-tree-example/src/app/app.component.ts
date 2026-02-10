import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeDemoComponent } from './tree-demo.component';
import { AdvancedTreeComponent } from './advanced-tree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TreeDemoComponent, AdvancedTreeComponent],
  template: `
    <div class="app-container">
      <app-tree-demo></app-tree-demo>
      <hr class="separator">
      <app-advanced-tree></app-advanced-tree>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
    }
    
    .separator {
      margin: 3rem 0;
      border: none;
      border-top: 2px solid #e0e0e0;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class AppComponent {
  title = 'angular-tree-example';
}
