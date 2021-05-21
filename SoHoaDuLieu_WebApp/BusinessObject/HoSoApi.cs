using System;

namespace BusinessObject
{
    /// <summary>
    /// Created by Hải Nam
    /// Date: 20/05/2021 - 10:05
    /// </summary>
    public class HoSoApi
    {
        public int Id { get; set; }
        public string TenVanBan { get; set; }
        public DateTime? NgayTao { get; set; }
        public DateTime? NgaySua { get; set; }
        public string NguoiSua { get; set; }
        public string NguoiTao { get; set; }
        public string NguoiDuyet1 { get; set; }
        public string NguoiDuyet2 { get; set; }
        public string NguoiDuyet3 { get; set; }
        public string NoiDungBocTach { get; set; }
        public int LoaiVanBan { get; set; }
    }
}
