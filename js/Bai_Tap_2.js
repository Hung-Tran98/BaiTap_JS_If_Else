/**
 * !Khối 1 : Input
 *          + hoTenNSD, soKw
 * 
 * !Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính tiền điện
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          - Lấy giá trị từ form
 * 
 *          - Lập công thức tính toán  và kiểm tra điều kiện
 * 
 *           + Nếu soKw <= 50 => 500d trên 1Kw
 *              tongTienDien = soKw * 500
 * 
 *            + Nếu 50 < soKw <= 100 => 650d trên 1Kw
 *              tongTienDien = 50 * 500 + (soKw - 50) * 650
 * 
 *            + Nếu 100 < soKw <= 200 => 850d trên 1Kw
 *              tongTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850
 * 
 *            + Nếu 200 < soKw <= 350 => 1100d trên 1Kw
 *              tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 +(soKw - 200) * 1100
 * 
 *            + Nếu 350 < soKw => 1300d trên 1Kw
 *              tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 +(soKw - 350) * 1300
 *          - Hiển thị kết quả lên UI
 *          
 * !Khối 3 : Output
 *          + tongTienDien
 */
var tongTienDien = 0;

function tinhTienDien() {
    var hoTenNSD = document.getElementById("hoTenNSD").value;
    var soKw = Number(document.getElementById("soKw").value);

    if(soKw<=50){
        tongTienDien = soKw * 500;
    }else if(50<soKw && soKw<=100){
        tongTienDien = 50 * 500 + (soKw - 50) * 650;
    }else if(100<soKw && soKw<=200){
        tongTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    }else if(200 < soKw && soKw<= 350){
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 +(soKw - 200) * 1100
    }else if(350 < soKw){
        tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 +(soKw - 350) * 1300
    }
    if(soKw<=0){
        tongTienDien = 0;
        alert("Số KW không hợp lệ !")
    }
    document.getElementById("txtTienDien").innerHTML = "Họ tên : " + hoTenNSD + " . Số tiền phải trả : " + tongTienDien.toLocaleString() + " VND";
}

document.getElementById("btnTinhTienDien").onclick = tinhTienDien;