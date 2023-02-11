/**
 * !Khối 1 : Input
 *          + diemMon1, diemMon2, diemMon3, diemChuan, chonKhuVuc, chonDoiTuong
 * 
 * !Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm xét điểm tuyển sinh
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          - Lấy giá trị từ form
 * 
 *          - Lập công thức tính toán  và kiểm tra điều kiện
 * 
 *           + Nếu (diemMon1 = 0 || diemMon2 = 0 || diemMon3 = 0) => Rớt không cần kiểm tra dù điểm tổng 3 môn
 * 
 *            + Nếu không thuộc khu vực nào ==> diemKhuVuc = 0
 * 
 *            + Nếu không thuộc đối tượng nào ==> diemDoiTuong = 0
 * 
 *            + diemUuTien = diemKhuVuc+ diemmDoiTuong
 *            + diemTong = diemMon1 + diemMon2 + diemMon3 + diemUuTien
 * 
 *             +Nếu diemTong >= diemChuan => Đậu
 *             + Nếu diemTong < diemChuan => Rớt
 * 
 *          - Hiển thị kết quả lên UI
 *          
 * !Khối 3 : Output
 *          + ketQua => Đậu hay Rớt
 */

var diemTong = 0;
var diemKhuVuc = 0;
var diemDoiTuong = 0;
var diemUuTien = 0;
var ketQuaThiSinh = "";

function xetDiemTuyenSinh() {
    var diemMon1 = Number(document.getElementById("diemMon1").value);
    var diemMon2 = Number(document.getElementById("diemMon2").value);
    var diemMon3 = Number(document.getElementById("diemMon3").value);
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var chonKhuVuc = document.getElementById("chonKhuVuc").value;
    var chonDoiTuong = Number(document.getElementById("chonDoiTuong").value);
    if(chonKhuVuc == "a"){
        diemKhuVuc = 2 ;
    }else if(chonKhuVuc == "b"){
        diemKhuVuc = 1 ;
    }else if(chonKhuVuc == "c"){
        diemKhuVuc = 0.5 ;
    }else if(chonKhuVuc == "x"){
        diemKhuVuc = 0 ;
    }
    if(chonDoiTuong == 1){
        diemDoiTuong = 2.5 ;
    }else if(chonDoiTuong == 2){
        diemDoiTuong = 1.5 ;
    }else if(chonDoiTuong == 3){
        diemDoiTuong = 1 ;
    }else if(chonDoiTuong == 0){
        diemDoiTuong = 0 ;
    }
    diemUuTien = diemDoiTuong + diemKhuVuc;
    diemTong = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
    if(diemTong>=diemChuan){
        ketQuaThiSinh = "Đậu";
    }else{
        ketQuaThiSinh = "Rớt";
    }
    if(diemChuan == 0){
        ketQuaThiSinh = "Bạn chưa nhập điểm chuẩn! "
        alert("Chưa nhập điểm chuẩn!")
    }
    if(diemMon1<=0||diemMon2<=0||diemMon3<=0){
        ketQuaThiSinh = "Rớt. Bạn nhập thiếu điểm môn học hoặc có môn học điểm số bé hơn hoặc bằng 0";
    }
    
    document.getElementById("txtKetQuaThiSinh").innerHTML = ketQuaThiSinh + ". Tổng điểm của bạn = "+ diemTong;
}

document.getElementById("btnKetQuaThiSinh").onclick = xetDiemTuyenSinh ;