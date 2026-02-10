import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree-demo',
  standalone: true,
  imports: [CommonModule, TreeModule],
  template: `
    <div class="tree-demo-container">
      <h2>PrimeNG Tree Component - Data Binding Example</h2>
      
      <div class="card">
        <h3>Organization Structure</h3>
        <p-tree 
          [value]="organizationData" 
          [selectionMode]="'single'"
          [(selection)]="selectedNode"
          (onNodeSelect)="onNodeSelect($event)"
          styleClass="w-full">
        </p-tree>
        
        <div *ngIf="selectedNode" class="selected-info">
          <h4>Selected Node Information:</h4>
          <p><strong>Label:</strong> {{ selectedNode.label }}</p>
          <p *ngIf="selectedNode.data"><strong>Role:</strong> {{ selectedNode.data }}</p>
        </div>
      </div>
      
      <div class="card">
        <h3>Project Tasks</h3>
        <p-tree 
          [value]="projectData" 
          [selectionMode]="'checkbox'"
          [(selection)]="selectedTasks">
        </p-tree>
        
        <div *ngIf="selectedTasks && selectedTasks.length > 0" class="selected-info">
          <h4>Selected Tasks: {{ selectedTasks.length }}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tree-demo-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    h2 {
      color: #333;
      margin-bottom: 2rem;
    }
    
    h3 {
      color: #555;
      margin-bottom: 1rem;
    }
    
    .selected-info {
      margin-top: 1.5rem;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 4px;
    }
    
    .selected-info h4 {
      margin-top: 0;
      color: #666;
    }
    
    .selected-info p {
      margin: 0.5rem 0;
    }
  `]
})
export class TreeDemoComponent {
  organizationData: TreeNode[] = [];
  projectData: TreeNode[] = [];
  selectedNode: TreeNode | null = null;
  selectedTasks: TreeNode[] = [];

  constructor() {
    this.initializeOrganizationData();
    this.initializeProjectData();
  }

  /**
   * Initialize organization hierarchy data
   * Demonstrates data binding with hierarchical structure
   */
  private initializeOrganizationData(): void {
    this.organizationData = [
      {
        label: 'Executive Leadership',
        data: 'C-Level',
        expanded: true,
        children: [
          {
            label: 'CEO',
            data: 'Chief Executive Officer',
            children: [
              {
                label: 'CTO',
                data: 'Chief Technology Officer',
                children: [
                  { label: 'Engineering Manager', data: 'Manager' },
                  { label: 'Senior Architect', data: 'Architect' }
                ]
              },
              {
                label: 'CFO',
                data: 'Chief Financial Officer',
                children: [
                  { label: 'Accounting Manager', data: 'Manager' },
                  { label: 'Financial Analyst', data: 'Analyst' }
                ]
              }
            ]
          }
        ]
      }
    ];
  }

  /**
   * Initialize project tasks data
   * Demonstrates data binding with task management structure
   */
  private initializeProjectData(): void {
    this.projectData = [
      {
        label: 'Project Alpha',
        expanded: true,
        children: [
          {
            label: 'Planning Phase',
            children: [
              { label: 'Requirements Gathering', data: 'In Progress' },
              { label: 'Technical Design', data: 'Not Started' }
            ]
          },
          {
            label: 'Development Phase',
            children: [
              { label: 'Backend Development', data: 'In Progress' },
              { label: 'Frontend Development', data: 'In Progress' },
              { label: 'Database Setup', data: 'Completed' }
            ]
          },
          {
            label: 'Testing Phase',
            children: [
              { label: 'Unit Testing', data: 'Not Started' },
              { label: 'Integration Testing', data: 'Not Started' }
            ]
          }
        ]
      }
    ];
  }

  /**
   * Handle node selection event
   * Demonstrates event binding
   */
  onNodeSelect(event: any): void {
    console.log('Node selected:', event.node);
  }
}
