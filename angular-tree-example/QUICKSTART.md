# Quick Start Guide

Get started with PrimeNG Tree component data binding in 5 minutes!

## Prerequisites

- Node.js (v18 or higher)
- Basic knowledge of Angular and TypeScript

## Installation

1. **Clone or download this example**

2. **Navigate to the example directory**
   ```bash
   cd angular-tree-example
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## What You'll See

The application displays several examples of PrimeNG tree component data binding:

### Page 1: Basic Examples
- **Organization Structure**: Click on nodes to select them
- **Project Tasks**: Use checkboxes to select multiple tasks

### Page 2: Advanced Examples
- **Service Loading**: Watch data load asynchronously
- **File System**: See custom icons for files and folders
- **Lazy Loading**: Expand nodes to load children dynamically
- **Flat Data**: Click button to transform and display flat data

## Simple Usage Example

Here's the minimal code to create a tree component:

```typescript
import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-simple-tree',
  standalone: true,
  imports: [TreeModule],
  template: `<p-tree [value]="data"></p-tree>`
})
export class SimpleTreeComponent {
  data: TreeNode[] = [
    {
      label: 'Parent',
      children: [
        { label: 'Child 1' },
        { label: 'Child 2' }
      ]
    }
  ];
}
```

## Key Concepts

### 1. TreeNode Structure
```typescript
{
  label: 'Display Text',     // What users see
  data: { /* custom data */ }, // Additional information
  children: [ /* child nodes */ ] // Nested structure
}
```

### 2. Selection Modes
- **single**: Select one node at a time
- **multiple**: Select multiple nodes
- **checkbox**: Checkboxes for selection

### 3. Event Binding
```typescript
<p-tree 
  [value]="data"
  (onNodeSelect)="handleSelect($event)">
</p-tree>
```

## Next Steps

1. **Explore the code**: Check out the component files in `src/app/`
2. **Read the README**: Full documentation with all features
3. **Modify the examples**: Try changing the data or adding new features
4. **Check PrimeNG docs**: https://primeng.org/tree

## Common Issues

### Tree not showing?
- Ensure PrimeNG CSS is loaded (check `index.html`)
- Verify data is initialized before rendering

### Selection not working?
- Add `selectionMode` attribute
- Bind to a variable with `[(selection)]`

### Styling issues?
- Check that theme CSS is included
- Verify PrimeIcons CSS is loaded

## Support

For more information:
- Full README: See `README.md` in this directory
- PrimeNG Docs: https://primeng.org
- Angular Docs: https://angular.io

Happy coding! 🎉
