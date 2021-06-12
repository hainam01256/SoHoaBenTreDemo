import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Số hóa tài liệu";
  events: string[] = [];
  opened: boolean = true;
  constructor() {
    
  }
  ngOnInit() {

  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  menu: NavItem [] = [
    {
      displayName: 'Quản lý hồ sơ',
      iconName: 'description',          
      children: [
        {
          displayName: 'Danh sách hồ sơ',
          iconName: 'list',
          route: '/quan-ly-ho-so/danh-sach-ho-so'
        },
        { 
          displayName: 'Duyệt hồ sơ',
          iconName: 'settings_backup_restore',
          route: '/quan-ly-ho-so/duyet-ho-so'
        }
      ]
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
          {
            displayName: 'Búsqueda Perfil',
            iconName: 'search',
            route: '/busquedaperfiles'
          }
        ]
      }
  ];

fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
