import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { TreeDataService } from './tree-data.service';

@Component({
  selector: 'app-advanced-tree',
  standalone: true,
  imports: [CommonModule, TreeModule],
  template: `
    <div class="advanced-tree-container">
      <h2>Advanced PrimeNG Tree - Data Binding Examples</h2>
      
      <!-- Example 1: Loading data from service -->
      <div class="card">
        <h3>1. Loading Data from Service</h3>
        <p>Demonstrates asynchronous data loading from a service (simulated API call)</p>
        
        <div *ngIf="loading" class="loading">
          Loading organization data...
        </div>
        
        <p-tree 
          *ngIf="!loading"
          [value]="organizationData" 
          [selectionMode]="'single'"
          [(selection)]="selectedNode">
        </p-tree>
        
        <div *ngIf="selectedNode && !loading" class="info-panel">
          <strong>Selected:</strong> {{ selectedNode.label }}
          <div *ngIf="selectedNode.data">
            <div><strong>Role:</strong> {{ selectedNode.data.role }}</div>
            <div><strong>Department:</strong> {{ selectedNode.data.department }}</div>
          </div>
        </div>
      </div>

      <!-- Example 2: File system with custom icons -->
      <div class="card">
        <h3>2. File System with Custom Icons</h3>
        <p>Demonstrates icon binding and file/folder representation</p>
        
        <p-tree 
          [value]="fileSystemData" 
          [selectionMode]="'single'"
          [(selection)]="selectedFile">
        </p-tree>
        
        <div *ngIf="selectedFile" class="info-panel">
          <strong>Selected:</strong> {{ selectedFile.label }}
          <div *ngIf="selectedFile.data">
            <div><strong>Type:</strong> {{ selectedFile.data.type }}</div>
            <div *ngIf="selectedFile.data.size">
              <strong>Size:</strong> {{ selectedFile.data.size }}
            </div>
          </div>
        </div>
      </div>

      <!-- Example 3: Lazy loading -->
      <div class="card">
        <h3>3. Lazy Loading Example</h3>
        <p>Click on nodes marked with arrow to load children dynamically</p>
        
        <p-tree 
          [value]="lazyData" 
          [loading]="lazyLoading"
          (onNodeExpand)="onNodeExpand($event)">
        </p-tree>
      </div>

      <!-- Example 4: Transformed flat data -->
      <div class="card">
        <h3>4. Flat Data Transformation</h3>
        <p>Demonstrates converting flat data structure to hierarchical tree</p>
        
        <button class="load-button" (click)="loadFlatData()">
          Load Flat Data
        </button>
        
        <p-tree 
          *ngIf="transformedData.length > 0"
          [value]="transformedData" 
          [selectionMode]="'single'">
        </p-tree>
        
        <div *ngIf="transformedData.length === 0" class="info-panel">
          Click the button to load and transform flat data structure
        </div>
      </div>
    </div>
  `,
  styles: [`
    .advanced-tree-container {
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
      margin-bottom: 0.5rem;
    }
    
    .card > p {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .info-panel {
      margin-top: 1rem;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 4px;
      font-size: 0.9rem;
    }
    
    .info-panel > div {
      margin-top: 0.5rem;
    }
    
    .loading {
      padding: 1rem;
      text-align: center;
      color: #666;
      font-style: italic;
    }
    
    .load-button {
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .load-button:hover {
      background: #0056b3;
    }
  `]
})
export class AdvancedTreeComponent implements OnInit {
  organizationData: TreeNode[] = [];
  fileSystemData: TreeNode[] = [];
  lazyData: TreeNode[] = [];
  transformedData: TreeNode[] = [];
  
  selectedNode: TreeNode | null = null;
  selectedFile: TreeNode | null = null;
  
  loading = true;
  lazyLoading = false;

  constructor(private treeDataService: TreeDataService) { }

  ngOnInit(): void {
    this.loadOrganizationData();
    this.loadFileSystemData();
    this.initializeLazyData();
  }

  /**
   * Load organization data from service
   */
  private loadOrganizationData(): void {
    this.loading = true;
    this.treeDataService.getOrganizationData().subscribe({
      next: (data) => {
        this.organizationData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading organization data:', error);
        this.loading = false;
      }
    });
  }

  /**
   * Load file system data from service
   */
  private loadFileSystemData(): void {
    this.treeDataService.getFileSystemData().subscribe({
      next: (data) => {
        this.fileSystemData = data;
      },
      error: (error) => {
        console.error('Error loading file system data:', error);
      }
    });
  }

  /**
   * Initialize data for lazy loading example
   */
  private initializeLazyData(): void {
    this.lazyData = [
      {
        label: 'Parent Node 1',
        leaf: false,
        children: []
      },
      {
        label: 'Parent Node 2',
        leaf: false,
        children: []
      }
    ];
  }

  /**
   * Handle node expansion for lazy loading
   * @param event Node expand event
   */
  onNodeExpand(event: any): void {
    const node = event.node;
    
    if (!node.children || node.children.length === 0) {
      this.lazyLoading = true;
      
      this.treeDataService.loadChildNodes(node).subscribe({
        next: (children) => {
          node.children = children;
          this.lazyLoading = false;
          // Trigger change detection
          this.lazyData = [...this.lazyData];
        },
        error: (error) => {
          console.error('Error loading child nodes:', error);
          this.lazyLoading = false;
        }
      });
    }
  }

  /**
   * Load and transform flat data structure
   */
  loadFlatData(): void {
    // Simulate flat data structure (e.g., from database)
    const flatData = [
      { id: '1', name: 'Root Category', parentId: null },
      { id: '2', name: 'Electronics', parentId: '1' },
      { id: '3', name: 'Clothing', parentId: '1' },
      { id: '4', name: 'Laptops', parentId: '2' },
      { id: '5', name: 'Phones', parentId: '2' },
      { id: '6', name: "Men's Wear", parentId: '3' },
      { id: '7', name: "Women's Wear", parentId: '3' },
      { id: '8', name: 'Gaming Laptops', parentId: '4' },
      { id: '9', name: 'Business Laptops', parentId: '4' }
    ];

    this.transformedData = this.treeDataService.transformFlatToTree(flatData);
  }
}
