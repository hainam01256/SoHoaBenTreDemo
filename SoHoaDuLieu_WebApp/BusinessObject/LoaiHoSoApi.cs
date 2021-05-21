using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObject
{
    /// <summary>
    /// Created by Hải Nam
    /// Date: 20/05/2021 - 10:05
    /// </summary>
    public class LoaiHoSoApi
    {
        public int? Id { get; set; }
        public string TenLoaiVanBan { get; set; }
        public DateTime? NgayTao { get; set; }
        public DateTime? NgaySua { get; set; }
        public string NguoiSua { get; set; }
        public string NguoiTao { get; set; }
    }
}
