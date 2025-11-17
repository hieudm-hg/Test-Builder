import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Permission {
  id: string;
  name: string;
  enabled: boolean;
}

interface PermissionSection {
  id: string;
  title: string;
  expanded: boolean;
  permissions: Permission[];
}

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.scss'
})
export class PermissionsComponent {
  sections: PermissionSection[] = [
    {
      id: 'user-management',
      title: 'Quản lý người dùng',
      expanded: true,
      permissions: [
        { id: 'view-user', name: '1.1 Xem thông tin người dùng', enabled: true },
        { id: 'edit-user', name: '1.2 Thêm, sửa, phân quyền người dùng', enabled: true },
        { id: 'delete-user', name: '1.3 Xóa, khôi phục người dùng', enabled: true }
      ]
    },
    {
      id: 'role-management',
      title: 'Quản lý vai trò',
      expanded: true,
      permissions: [
        { id: 'view-role', name: '1.1 Xem thông tin vai trò', enabled: true },
        { id: 'edit-role', name: '1.2 Thêm, sửa thông tin vài trò', enabled: true },
        { id: 'delete-role', name: '1.3 Xóa vai trò', enabled: true }
      ]
    },
    {
      id: 'workspace-management',
      title: 'Quản lý workspace',
      expanded: true,
      permissions: [
        { id: 'view-workspace', name: '1.1 Xem thông tin workspace', enabled: true },
        { id: 'edit-workspace', name: '1.2 Thêm, sửa workspace', enabled: true },
        { id: 'settings-workspace', name: '1.3 Cài đặt workspace', enabled: true },
        { id: 'delete-workspace', name: '1.4 Xóa workspace', enabled: true }
      ]
    }
  ];

  

  toggleSection(sectionId: string): void {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.expanded = !section.expanded;
    }
  }

  togglePermission(sectionId: string, permissionId: string): void {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      const permission = section.permissions.find(p => p.id === permissionId);
      if (permission) {
        permission.enabled = !permission.enabled;
      }
    }
  }
}
