# PrimeNG Tree Component Data Binding Example

This example demonstrates how to bind data to a PrimeNG Tree component in an Angular application.

## Overview

PrimeNG's Tree component is a powerful UI element for displaying hierarchical data. This example shows:

- **Data Binding**: How to bind hierarchical data structures to the tree
- **Selection Modes**: Single selection and checkbox selection
- **Event Handling**: Responding to node selection events
- **Data Models**: Using the `TreeNode` interface from PrimeNG

## Features Demonstrated

### 1. Organization Structure Tree
- Single selection mode
- Hierarchical organization chart
- Node selection event handling
- Display selected node information

### 2. Project Tasks Tree
- Checkbox selection mode
- Multi-level task hierarchy
- Multiple node selection
- Track selected tasks count

## Key Concepts

### TreeNode Interface

The `TreeNode` interface from PrimeNG API is used to structure the data:

```typescript
interface TreeNode {
  label?: string;          // Display text for the node
  data?: any;              // Additional data associated with the node
  icon?: string;           // Icon to display
  expandedIcon?: string;   // Icon when node is expanded
  collapsedIcon?: string;  // Icon when node is collapsed
  children?: TreeNode[];   // Child nodes
  leaf?: boolean;          // Whether the node is a leaf
  expanded?: boolean;      // Initial expansion state
  type?: string;           // Node type for custom styling
  parent?: TreeNode;       // Parent node reference
  partialSelected?: boolean; // For checkbox mode
  styleClass?: string;     // Custom CSS class
  draggable?: boolean;     // Enable drag & drop
  droppable?: boolean;     // Enable drag & drop
  selectable?: boolean;    // Whether the node can be selected
  key?: string;            // Unique key for the node
}
```

### Data Binding Syntax

#### Basic Tree Binding
```html
<p-tree [value]="treeData"></p-tree>
```

#### With Selection
```html
<p-tree 
  [value]="treeData" 
  [selectionMode]="'single'"
  [(selection)]="selectedNode">
</p-tree>
```

#### With Event Handling
```html
<p-tree 
  [value]="treeData" 
  (onNodeSelect)="onNodeSelect($event)"
  (onNodeUnselect)="onNodeUnselect($event)"
  (onNodeExpand)="onNodeExpand($event)"
  (onNodeCollapse)="onNodeCollapse($event)">
</p-tree>
```

## Component Structure

### TreeDemoComponent

The main component (`tree-demo.component.ts`) includes:

1. **Data Properties**:
   - `organizationData`: TreeNode[] - Organization hierarchy
   - `projectData`: TreeNode[] - Project tasks hierarchy
   - `selectedNode`: TreeNode - Currently selected node (single selection)
   - `selectedTasks`: TreeNode[] - Selected tasks (checkbox mode)

2. **Data Initialization Methods**:
   - `initializeOrganizationData()`: Creates organization structure
   - `initializeProjectData()`: Creates project task structure

3. **Event Handlers**:
   - `onNodeSelect(event)`: Handles node selection

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**:
```bash
cd angular-tree-example
npm install
```

2. **Run the Application**:
```bash
npm start
```

3. **View in Browser**:
Navigate to `http://localhost:4200`

## Dependencies

- **@angular/core**: ^17.0.0
- **@angular/common**: ^17.0.0
- **primeng**: ^17.0.0 - PrimeNG component library
- **primeicons**: ^6.0.1 - Icon library for PrimeNG

## Code Structure

```
angular-tree-example/
├── src/
│   ├── app/
│   │   ├── app.component.ts          # Root component
│   │   └── tree-demo.component.ts    # Tree demo component
│   ├── index.html                     # HTML entry point
│   ├── main.ts                        # Application bootstrap
│   └── styles.css                     # Global styles
├── angular.json                       # Angular configuration
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # This file
```

## Data Binding Patterns

### 1. Static Data Binding

```typescript
organizationData: TreeNode[] = [
  {
    label: 'Root Node',
    expanded: true,
    children: [
      { label: 'Child 1', data: 'Additional Info' },
      { label: 'Child 2', data: 'More Info' }
    ]
  }
];
```

### 2. Dynamic Data Binding

```typescript
loadDataFromAPI() {
  this.apiService.getData().subscribe(data => {
    this.treeData = this.transformToTreeNode(data);
  });
}
```

### 3. Lazy Loading

```typescript
<p-tree 
  [value]="treeData" 
  (onNodeExpand)="loadNode($event)">
</p-tree>

loadNode(event: any) {
  // Load children for the expanded node
  this.apiService.getChildren(event.node.data).subscribe(children => {
    event.node.children = children;
  });
}
```

## Selection Modes

### Single Selection
- Only one node can be selected at a time
- Use `selectionMode="single"`
- Bind to a single TreeNode object

### Multiple Selection
- Multiple nodes can be selected
- Use `selectionMode="multiple"`
- Bind to a TreeNode array

### Checkbox Selection
- Checkbox appears next to each node
- Use `selectionMode="checkbox"`
- Supports parent-child selection propagation
- Bind to a TreeNode array

## Styling

The example includes custom CSS for:
- Container layout
- Card components
- Selected node information display
- Responsive design

You can customize the appearance by:
1. Overriding PrimeNG theme variables
2. Adding custom CSS classes via `styleClass` property
3. Modifying component styles

## Best Practices

1. **Initialize Data**: Set up tree data in component initialization
2. **Use TreeNode Interface**: Follow PrimeNG's TreeNode structure
3. **Handle Events**: Implement event handlers for user interactions
4. **Unique Keys**: Use unique keys for nodes when needed
5. **Performance**: For large datasets, consider lazy loading
6. **Type Safety**: Use TypeScript interfaces for data models

## Common Issues & Solutions

### Issue: Tree not displaying
**Solution**: Ensure PrimeNG CSS is loaded and data is properly initialized

### Issue: Selection not working
**Solution**: Check that selectionMode is set and selection property is bound

### Issue: Styles not applied
**Solution**: Verify PrimeNG theme CSS is included in index.html or angular.json

## Additional Resources

- [PrimeNG Tree Documentation](https://primeng.org/tree)
- [PrimeNG API Reference](https://primeng.org/tree#api)
- [Angular Documentation](https://angular.io/docs)

## License

MIT License - Free to use and modify for your projects.
