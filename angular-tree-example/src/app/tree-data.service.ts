import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { TreeNode } from 'primeng/api';

/**
 * Service to demonstrate loading tree data from external sources
 * In a real application, this would call an API
 */
@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  constructor() { }

  /**
   * Simulates an API call to fetch organization data
   * @returns Observable of TreeNode array
   */
  getOrganizationData(): Observable<TreeNode[]> {
    const data: TreeNode[] = [
      {
        label: 'Executive Leadership',
        data: { role: 'C-Level', department: 'Executive' },
        expanded: true,
        children: [
          {
            label: 'CEO',
            data: { role: 'Chief Executive Officer', department: 'Executive' },
            children: [
              {
                label: 'CTO',
                data: { role: 'Chief Technology Officer', department: 'Technology' },
                children: [
                  { 
                    label: 'Engineering Manager', 
                    data: { role: 'Manager', department: 'Engineering' } 
                  },
                  { 
                    label: 'Senior Architect', 
                    data: { role: 'Architect', department: 'Engineering' } 
                  }
                ]
              },
              {
                label: 'CFO',
                data: { role: 'Chief Financial Officer', department: 'Finance' },
                children: [
                  { 
                    label: 'Accounting Manager', 
                    data: { role: 'Manager', department: 'Finance' } 
                  },
                  { 
                    label: 'Financial Analyst', 
                    data: { role: 'Analyst', department: 'Finance' } 
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    // Simulate network delay
    return of(data).pipe(delay(500));
  }

  /**
   * Simulates lazy loading of child nodes
   * @param parentNode The parent node to load children for
   * @returns Observable of TreeNode array
   */
  loadChildNodes(parentNode: TreeNode): Observable<TreeNode[]> {
    // In a real application, this would make an API call
    // based on the parent node's ID or data
    const children: TreeNode[] = [
      {
        label: `Child of ${parentNode.label} - 1`,
        data: { dynamicallyLoaded: true }
      },
      {
        label: `Child of ${parentNode.label} - 2`,
        data: { dynamicallyLoaded: true }
      }
    ];

    return of(children).pipe(delay(300));
  }

  /**
   * Simulates fetching file system structure
   * @returns Observable of TreeNode array representing files and folders
   */
  getFileSystemData(): Observable<TreeNode[]> {
    const data: TreeNode[] = [
      {
        label: 'Documents',
        data: { type: 'folder', size: null },
        icon: 'pi pi-folder',
        expanded: true,
        children: [
          {
            label: 'Work',
            data: { type: 'folder', size: null },
            icon: 'pi pi-folder',
            children: [
              { 
                label: 'Project_Plan.pdf', 
                data: { type: 'file', size: '2.5 MB' },
                icon: 'pi pi-file-pdf'
              },
              { 
                label: 'Budget.xlsx', 
                data: { type: 'file', size: '1.2 MB' },
                icon: 'pi pi-file-excel'
              }
            ]
          },
          {
            label: 'Personal',
            data: { type: 'folder', size: null },
            icon: 'pi pi-folder',
            children: [
              { 
                label: 'Resume.docx', 
                data: { type: 'file', size: '500 KB' },
                icon: 'pi pi-file-word'
              }
            ]
          }
        ]
      },
      {
        label: 'Pictures',
        data: { type: 'folder', size: null },
        icon: 'pi pi-folder',
        children: [
          { 
            label: 'Vacation.jpg', 
            data: { type: 'file', size: '4.5 MB' },
            icon: 'pi pi-image'
          },
          { 
            label: 'Family.png', 
            data: { type: 'file', size: '3.2 MB' },
            icon: 'pi pi-image'
          }
        ]
      }
    ];

    return of(data).pipe(delay(400));
  }

  /**
   * Transform flat data structure into hierarchical TreeNode structure
   * @param flatData Array of flat objects with id and parentId
   * @returns TreeNode array
   */
  transformFlatToTree(flatData: any[]): TreeNode[] {
    const map = new Map<string, TreeNode>();
    const roots: TreeNode[] = [];

    // First pass: create all nodes
    flatData.forEach(item => {
      map.set(item.id, {
        label: item.name,
        data: item,
        children: []
      });
    });

    // Second pass: build hierarchy
    flatData.forEach(item => {
      const node = map.get(item.id)!;
      if (item.parentId) {
        const parent = map.get(item.parentId);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(node);
        }
      } else {
        roots.push(node);
      }
    });

    return roots;
  }
}
