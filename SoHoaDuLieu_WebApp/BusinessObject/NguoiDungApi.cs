using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObject
{
    public class NguoiDungApi
    {
        public string Id { get; set; }
        public string Ten { get; set; }
        public string TenDangNhap { get; set; }
        public string MatKhau { get; set; }
        public DateTime? NgayTao { get; set; }
        public DateTime? NgaySua { get; set; }
        public string NguoiTao { get; set; }
        public string NguoiSua { get; set; }
        public string CapQuyen { get; set; }
        public string PhongBan { get; set; }
    }
}
