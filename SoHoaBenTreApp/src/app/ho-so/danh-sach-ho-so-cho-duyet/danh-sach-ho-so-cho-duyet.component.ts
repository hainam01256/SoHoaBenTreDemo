import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ho-so-cho-duyet',
  templateUrl: './danh-sach-ho-so-cho-duyet.component.html',
  styleUrls: ['./danh-sach-ho-so-cho-duyet.component.scss']
})
export class DanhSachHoSoChoDuyetComponent implements OnInit {
  dsHoSo: any[] = [
    {Id: 1, Ten: 'Hồ sơ 1', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến giấy phép đăng ký nhà đất',NguoiDuyet: '', TrangThai: 1, TieuChuan: '93%'},
    {Id: 4, Ten: 'Hồ sơ 4', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Kế hoạch, báo cáo thực hiện kế hoạch sản xuất nông nghiệp vụ Đông - Xuân năm 2010- 2011 của Sở Nông nghiệp và Phát triển nông thôn',NguoiDuyet: '', TrangThai: 1, TieuChuan: '85%'},
    {Id: 8, Ten: 'Hồ sơ 8', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Các tài liệu liên quan đến giấy phép đăng ký nhà đất',NguoiDuyet: '', TrangThai: 1, TieuChuan: '80%'},
    {Id: 10, Ten: 'Hồ sơ 10', NgayBatDau: new Date, NgayKetThuc: new Date, NoiDung: 'Kế hoạch, báo cáo thực hiện kế hoạch sản xuất nông nghiệp vụ Đông - Xuân năm 2010- 2011 của Sở Nông nghiệp và Phát triển nông thôn',NguoiDuyet: '', TrangThai: 1, TieuChuan: '75%'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
