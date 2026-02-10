# Angular PrimeNG Tree Application

This is an Angular application that demonstrates hierarchical data display using the PrimeNG Tree component.

## Features

- **PrimeNG Tree Component**: Displays hierarchical data in a tree structure
- **Expandable/Collapsible Nodes**: Interactive tree with expand and collapse functionality
- **Icons**: File and folder icons using PrimeIcons
- **Modern Styling**: Clean UI with Aura theme from PrimeUI
- **Responsive Design**: Works on different screen sizes

## Hierarchical Data Structure

The application displays a file system tree with:

- **Documents Folder**
  - Work (with PDF, Excel, and Word files)
  - Personal (with PDF files and Photos subfolder)
- **Projects Folder**
  - Angular (with TypeScript and HTML files)
  - React (with JSX files)

## Technologies Used

- Angular 19.1.x
- PrimeNG 18.x
- PrimeIcons
- @primeuix/themes (Aura theme)
- TypeScript

## Installation

```bash
cd angular-tree-app
npm install
```

## Development Server

Run the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` to view the application.

## Build

Build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
angular-tree-app/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main application component with tree data
│   │   ├── app.html        # Template with PrimeNG tree
│   │   ├── app.css         # Component styles
│   │   ├── app.config.ts   # App configuration with PrimeNG setup
│   │   └── app.routes.ts   # Routing configuration
│   ├── styles.css          # Global styles with PrimeIcons
│   └── index.html          # Main HTML file
├── angular.json            # Angular CLI configuration
├── package.json            # Project dependencies
└── tsconfig.json          # TypeScript configuration
```

## Code Highlights

### Tree Data Structure (app.ts)

The hierarchical data is defined as an array of `TreeNode` objects:

```typescript
files: TreeNode[] = [
  {
    key: '0',
    label: 'Documents',
    icon: 'pi pi-fw pi-inbox',
    expanded: true,
    children: [
      // nested children...
    ]
  }
];
```

### PrimeNG Configuration (app.config.ts)

PrimeNG is configured with the Aura theme:

```typescript
providePrimeNG({
  theme: {
    preset: Aura
  }
})
```

### Tree Component Usage (app.html)

The tree is rendered using the PrimeNG Tree component:

```html
<p-tree [value]="files" class="w-full"></p-tree>
```

## License

MIT
