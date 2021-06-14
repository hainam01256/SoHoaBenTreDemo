export class HoSo {
    Id: number;
    Ten: string;
    NgayTao: Date;
    NgaySua: Date;
    NgayBatDau: Date;
    NgayKetThuc: Date;
    NoiDung: string;
    NguoiTao: string;
    NguoiSua: string;
    NguoiDuyet1: string;
    NguoiDuyet2: string;
    TrangThai: number;
    NoiDungBocTach: Array<string>;
    LoaiHoSoId: number;
    constructor(hoSo: HoSo) {
        hoSo = hoSo || {};
        this.Id = hoSo.Id || 0;
        this.Ten = hoSo.Ten || '';
        this.NgayTao = hoSo.NgayTao || new Date;
        this.NgaySua = hoSo.NgaySua || new Date;
        this.NguoiTao = hoSo.NguoiTao || '';
        this.NguoiSua = hoSo.NguoiSua || '';
        this.NguoiDuyet1 = hoSo.NguoiDuyet1 || '';
        this.NguoiDuyet2 = hoSo.NguoiDuyet1 || '';
        this.NoiDungBocTach = hoSo.NoiDungBocTach || [];
        this.LoaiHoSoId = hoSo.LoaiHoSoId || 0;

        this.NgayBatDau= hoSo.NgayBatDau || new Date;
        this.NgayKetThuc = hoSo.NgayKetThuc || new Date;
        this.NoiDung = hoSo.NoiDung || '';
        this.TrangThai = hoSo.TrangThai || 0;

    }
}