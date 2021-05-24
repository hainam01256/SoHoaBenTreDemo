export class HoSo {
    Id: number;
    Ten: string;
    NgayTao: Date;
    NgaySua: Date;
    NguoiTao: string;
    NguoiSua: string;
    NguoiDuyet1: string;
    NguoiDuyet2: string;
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
    }
}