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
 *              thuNhapChiuThue = tongThuNhapNam -4e+6 -soNguoiPhuThuoc *16e+5
 * 
 *           + Nếu tongThuNhapNam <= 60tr =>Tính thuế 5%
 * 
 *              thuePhaiTra = thuNhapChiuThue * 0.05
 *                  
 *            + Nếu 60tr < tongThuNhapNam <= 120tr =>Tính thuế 10%
 * 
 *              thuePhaiTra = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1
 * 
 *            + Nếu 120tr < tongThuNhapNam <= 210tr => Tính thuế 15%
 * 
 *              thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15
 * 
 *            + Nếu 210tr < tongThuNhapNam <= 384tr => Tính thuế 20%
 * 
 *              thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2
 * 
 *            + Nếu 384tr < tongThuNhapNam <= 624tr => Tính thuế 25%
 * 
 *              thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + 114e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25
 * 
 *             + Nếu 624tr < tongThuNhapNam <= 960tr => Tính thuế 30%      
 *       
 *              thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + 114e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3
 *              
 *             + Nếu 960tr < tongThuNhapNam => Tính thuế 35%
 *              
 *              thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + 114e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.3
 *              
 *          - Hiển thị kết quả lên UI
 *          
 * !Khối 3 : Output
 *          + tongTienThuePhaiTra
 */
var thuePhaiTra = 0;
var thuNhapChiuThue = 0;

function tinhTienThueCaNhan() {
    var hoTenCaNhan = document.getElementById("hoTenCaNhan").value;
    var tongThuNhapNam = Number(document.getElementById("tongThuNhapNam").value);
    var soNguoiPhuThuoc = Number(document.getElementById("soNguoiPhuThuoc").value);

    thuNhapChiuThue = tongThuNhapNam -4e+6 -soNguoiPhuThuoc *16e+5
    if(tongThuNhapNam<6e+6){
        thuePhaiTra = 0;
        alert("Nhập sai số tiền(số tiền lớn hơn hoặc bằng 6 triệu) !");
    }
    else if(thuNhapChiuThue<=60e+6){

        thuePhaiTra = thuNhapChiuThue * 0.05;

    }else if(thuNhapChiuThue>60e+6 && thuNhapChiuThue<=120e+6){

        thuePhaiTra = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1;

    }else if(thuNhapChiuThue>120e+6 && thuNhapChiuThue<=210e+6){

        thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15;

    }else if(thuNhapChiuThue>210e+6 && thuNhapChiuThue<=384e+6){

        thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2;

    }else if(thuNhapChiuThue>384e+6 && thuNhapChiuThue<=624e+6){

        thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + 114e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25;

    }else if(thuNhapChiuThue>624e+6 && thuNhapChiuThue<=960e+6){

        thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + 114e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3;

    }else if(thuNhapChiuThue>960e+6){

        thuePhaiTra = 60e+6 * 0.05 + 60e+6 * 0.1 + 150e+6 * 0.15 + 114e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35

    }
    document.getElementById("txtTongTienThueCaNhan").innerHTML = "Họ tên : " + hoTenCaNhan + " . Số tiền thuế thu nhập cá nhân phải trả là : " + thuePhaiTra.toLocaleString() + " VND";
}

document.getElementById("btnTinhThueCaNhan").onclick = tinhTienThueCaNhan;