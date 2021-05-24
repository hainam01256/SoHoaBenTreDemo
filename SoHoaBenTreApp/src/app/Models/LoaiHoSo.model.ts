export class LoailoaiHoSo {
    Id: number;
    Ten: string;
    NgayTao: Date;
    NgaySua: Date;
    NguoiTao: string;
    NguoiSua: string;
    constructor(loaiHoSo: LoailoaiHoSo) {
        loaiHoSo = loaiHoSo || {};
        this.Id = loaiHoSo.Id || 0;
        this.Ten = loaiHoSo.Ten || '';
        this.NgayTao = loaiHoSo.NgayTao || new Date;
        this.NgaySua = loaiHoSo.NgaySua || new Date;
        this.NguoiTao = loaiHoSo.NguoiTao || '';
        this.NguoiSua = loaiHoSo.NguoiSua || '';
    }
}