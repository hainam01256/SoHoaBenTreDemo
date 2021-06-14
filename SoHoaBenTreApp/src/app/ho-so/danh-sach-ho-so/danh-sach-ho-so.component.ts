import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component , ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-danh-sach-ho-so',
  templateUrl: './danh-sach-ho-so.component.html',
  styleUrls: ['./danh-sach-ho-so.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DanhSachHoSoComponent  {
  dataSource = ELEMENT_DATA2;
  columnsToDisplay = ['STT','Ten', 'NoiDung', 'NguoiDuyet', 'TrangThai','ChucNang'];
  expandedElement!: PeriodicElement| null;
  dsHoSo: any[] = [
    {Id: 1, Ten: 'Hồ sơ 1', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến giấy phép đăng ký nhà đất',NguoiDuyet: '', TrangThai: 1, LoaiHoSoId: 1},
    {Id: 2, Ten: 'Hồ sơ 2', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến giấy phép đăng ký hộ kinh doanh',NguoiDuyet: 'Kế toán Tài', TrangThai: 2, LoaiHoSoId: 2},
    {Id: 3, Ten: 'Hồ sơ 3', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Chương trình, kế hoạch, báo cáo của Bộ Nội vụ về thực hiện cải cách hành chính công năm 2011',NguoiDuyet: 'Văn thư Nhi', TrangThai: 2, LoaiHoSoId: 2},
    {Id: 4, Ten: 'Hồ sơ 4', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Kế hoạch, báo cáo thực hiện kế hoạch sản xuất nông nghiệp vụ Đông - Xuân năm 2010- 2011 của Sở Nông nghiệp và Phát triển nông thôn',NguoiDuyet: '', TrangThai: 1, LoaiHoSoId: 1},
    {Id: 5, Ten: 'Hồ sơ 5', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Chương trình kế hoạch, báo cáo công tác năm 2011 của Đài Truyền hình Việt Nam',NguoiDuyet: 'Văn thư Ngọc', TrangThai: 0, LoaiHoSoId: 3},
    {Id: 6, Ten: 'Hồ sơ 6', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến thủ tục hành chính Một cửa',NguoiDuyet: 'Trưởng phòng Ngô', TrangThai: 0, LoaiHoSoId: 1}
  ];
}

export interface PeriodicElement {
  STT: number;
  Ten: string;
  NoiDung: string;
  NguoiDuyet: string;
  TrangThai: string;
}

const ELEMENT_DATA2: PeriodicElement[] = [
  {
    STT: 1,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
    STT: 2,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Thu hồi'
  }, {
     STT: 3,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
    STT: 4,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
     STT: 5,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Thu hồi'
  }, {
     STT: 6,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
     STT: 7,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
     STT: 8,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
     STT: 9,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Phát hành'
  }, {
     STT: 10,
    Ten: 'Kế hoạch quý 3',
    NoiDung: 'Kế hoạch quý 3',
    NguoiDuyet: 'Văn thư',
    TrangThai: 'Thu hồi'
  },
];

export interface HoSo {
  Id: number;
  Ten: string;
  NgayBatDau: Date;
  NgayKetThuc: Date;
  NoiDung: string;
  NguoiDuyet: string;
  TrangThai: number;
  LoaiHoSoId: number;
}
//Mục trạng thái của hồ sơ:
//1: Chờ duyệt
//0: Hủy
//2: Được duyệt
const ELEMENT_DATA: HoSo[] = [
  {Id: 1, Ten: 'Hồ sơ 1', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến giấy phép đăng ký nhà đất',NguoiDuyet: 'Hải Nam', TrangThai: 1, LoaiHoSoId: 1},
  {Id: 2, Ten: 'Hồ sơ 2', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến giấy phép đăng ký hộ kinh doanh',NguoiDuyet: 'Kế toán Tài', TrangThai: 2, LoaiHoSoId: 2},
  {Id: 3, Ten: 'Hồ sơ 3', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Chương trình, kế hoạch, báo cáo của Bộ Nội vụ về thực hiện cải cách hành chính công năm 2011',NguoiDuyet: 'Văn thư Nhi', TrangThai: 2, LoaiHoSoId: 2},
  {Id: 4, Ten: 'Hồ sơ 4', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Kế hoạch, báo cáo thực hiện kế hoạch sản xuất nông nghiệp vụ Đông - Xuân năm 2010- 2011 của Sở Nông nghiệp và Phát triển nông thôn',NguoiDuyet: 'Văn thư Nhi', TrangThai: 1, LoaiHoSoId: 1},
  {Id: 5, Ten: 'Hồ sơ 5', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Chương trình kế hoạch, báo cáo công tác năm 2011 của Đài Truyền hình Việt Nam',NguoiDuyet: 'Văn thư Ngọc', TrangThai: 0, LoaiHoSoId: 3},
  {Id: 6, Ten: 'Hồ sơ 6', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến thủ tục hành chính Một cửa',NguoiDuyet: 'Trưởng phòng Ngô', TrangThai: 0, LoaiHoSoId: 1}
];


/// son test
