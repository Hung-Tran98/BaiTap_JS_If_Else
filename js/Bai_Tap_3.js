/**
 * !Khối 1 : Input
 *          + hoTenCaNhan, tongThuNhapNam, soNguoiPhuThuoc
 * 
 * !Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính thuế thu nhập cá nhân
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          - Lấy giá trị từ form
 * 
 *          - Lập công thức tính toán và kiểm tra điều kiện
 * 
 *           + Nếu tongThuNhapNam <= 60 =>Tính thuế 5%
 * 
 *            + Nếu 60 < tongThuNhapNam <= 120 =>Tính thuế 10%
 * 
 *            + Nếu 120 < tongThuNhapNam <= 210 => Tính thuế 15%
 * 
 *            + Nếu 210 < tongThuNhapNam <= 384 => Tính thuế 20%
 * 
 *            + Nếu 384 < tongThuNhapNam <= 624 => Tính thuế 25%
 * 
 *             + Nếu 624 < tongThuNhapNam <= 960 => Tính thuế 30%            
 * 
 *             + Nếu 960 < tongThuNhapNam => Tính thuế 35%
 *              
 *          - Hiển thị kết quả lên UI
 *          
 * !Khối 3 : Output
 *          + tongTienThuePhaiTra
 */
var thuNhapChiuThue = 0;


function tinhTienThueCaNhan() {
    var hoTenCaNhan = document.getElementById("hoTenCaNhan").value;
    var tongThuNhapNam = Number(document.getElementById("tongThuNhapNam").value);
    var soNguoiPhuThuoc = Number(document.getElementById("soNguoiPhuThuoc").value);
    
    if(tongThuNhapNam<=60e+6){
        thuNhapChiuThue = tongThuNhapNam * 0.05;
    }else if(tongThuNhapNam>60e+6 && tongThuNhapNam<=120e+6){
        thuNhapChiuThue = 60e+6 * 0.05 + (tongThuNhapNam - 60e+6) * 0.1;
    }else if(tongThuNhapNam>120e+6 && tongThuNhapNam<=210e+6){
        thuNhapChiuThue = tongThuNhapNam * 0.15;
    }else if(tongThuNhapNam>210e+6 && tongThuNhapNam<=384e+6){
        thuNhapChiuThue = tongThuNhapNam * 0.2;
    }else if(tongThuNhapNam>384e+6 && tongThuNhapNam<=624e+6){
        thuNhapChiuThue = tongThuNhapNam * 0.25;
    }else if(tongThuNhapNam>624e+6 && tongThuNhapNam<=960e+6){
        thuNhapChiuThue = tongThuNhapNam * 0.3;
    }else if(tongThuNhapNam>960e+6){
        thuNhapChiuThue = tongThuNhapNam * 0.35;
    }
    thuNhapChiuThue = thuNhapChiuThue - 4e+6 - soNguoiPhuThuoc * 16e+5;
    document.getElementById("txtTongTienThueCaNhan").innerHTML = "Họ tên : " + hoTenCaNhan + " . Số tiền thuế thu nhập cá nhân phải trả là : " + thuNhapChiuThue.toLocaleString() + " VND";
}

document.getElementById("btnTinhThueCaNhan").onclick = tinhTienThueCaNhan;