import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Angular PrimeNG Tree Application';
  
  files: TreeNode[] = [];

  ngOnInit() {
    this.files = [
      {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        expanded: true,
        children: [
          {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-briefcase',
            expanded: true,
            children: [
              {
                key: '0-0-0',
                label: 'Project Proposal.pdf',
                icon: 'pi pi-fw pi-file-pdf',
                data: 'Project Proposal Document'
              },
              {
                key: '0-0-1',
                label: 'Budget.xlsx',
                icon: 'pi pi-fw pi-file-excel',
                data: 'Budget Spreadsheet'
              },
              {
                key: '0-0-2',
                label: 'Meeting Notes.doc',
                icon: 'pi pi-fw pi-file-word',
                data: 'Meeting Notes Document'
              }
            ]
          },
          {
            key: '0-1',
            label: 'Personal',
            data: 'Personal Folder',
            icon: 'pi pi-fw pi-home',
            expanded: true,
            children: [
              {
                key: '0-1-0',
                label: 'Resume.pdf',
                icon: 'pi pi-fw pi-file-pdf',
                data: 'Resume Document'
              },
              {
                key: '0-1-1',
                label: 'Photos',
                icon: 'pi pi-fw pi-image',
                data: 'Photos Folder',
                children: [
                  {
                    key: '0-1-1-0',
                    label: 'vacation.jpg',
                    icon: 'pi pi-fw pi-image',
                    data: 'Vacation Photo'
                  },
                  {
                    key: '0-1-1-1',
                    label: 'family.jpg',
                    icon: 'pi pi-fw pi-image',
                    data: 'Family Photo'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        key: '1',
        label: 'Projects',
        data: 'Projects Folder',
        icon: 'pi pi-fw pi-folder',
        expanded: true,
        children: [
          {
            key: '1-0',
            label: 'Angular',
            data: 'Angular Projects',
            icon: 'pi pi-fw pi-code',
            children: [
              {
                key: '1-0-0',
                label: 'app.component.ts',
                icon: 'pi pi-fw pi-file',
                data: 'TypeScript file'
              },
              {
                key: '1-0-1',
                label: 'app.component.html',
                icon: 'pi pi-fw pi-file',
                data: 'HTML file'
              }
            ]
          },
          {
            key: '1-1',
            label: 'React',
            data: 'React Projects',
            icon: 'pi pi-fw pi-code',
            children: [
              {
                key: '1-1-0',
                label: 'App.jsx',
                icon: 'pi pi-fw pi-file',
                data: 'React component'
              }
            ]
          }
        ]
      }
    ];
  }
}
