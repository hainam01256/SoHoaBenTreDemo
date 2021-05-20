using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObject
{
    public class LoaiVanBan
    {
        public int? Id { get; set; }
        public string TenLoaiVanBan { get; set; }
        public DateTime? NgayTao { get; set; }
        public DateTime? NgaySua { get; set; }
        public string NguoiSua { get; set; }
        public string NguoiTao { get; set; }
    }
}
