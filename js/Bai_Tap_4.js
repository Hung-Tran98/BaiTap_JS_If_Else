/**
 * !Khối 1 : Input
 *          + maKH, soKenhCaoCap, soKetNoi, chonLoaiKH
 *
 * !Khối 2 : Các bước xử lý
 *
 *      B1 : Lấy giá trị từ form khi user click
 *
 *          + Tạo hàm
 *          + Gán hàm vào sự kiện click của button
 *
 *      B2 : Trong hàm
 *
 *          - Lấy giá trị từ form
 *
 *          - Lập công thức tính toán  và kiểm tra điều kiện
 *
 *           + Nhà Dân
 *              tongTienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
 *            + Doanh Nghiệp
 *              tongTienCap = 15 + 75 + soKetNoi * 5 + 50 * soKenhCaoCap;
 *
 *
 *          - Hiển thị kết quả lên UI
 *
 * !Khối 3 : Output
 *          + tongTienCap
 */ 
window.onload =  function(){
    document.getElementById("formSoKetNoi").classList = "d-none";
}
function anHienInput() {
  var eve = document.getElementById("chonLoaiKH").value;
    if (eve == 0) {
    document.getElementById("formSoKetNoi").classList = ('d-none');
    } else if(eve == 1) {
    document.getElementById("formSoKetNoi").classList = ('d-none');
  }else if(eve == 2){
    document.getElementById("formSoKetNoi").classList.toggle('d-none');

  }
}

var tongTienCap = 0;
function tinhTienCap() {
  var soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var maKH = document.getElementById("maKH").value;
  var chonLoaiKH = Number(document.getElementById("chonLoaiKH").value);
  if(chonLoaiKH == 0){
    alert("Xin hãy chọn loại khách hàng !");
  }
  else if (chonLoaiKH == 1) {
    tongTienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else if (chonLoaiKH == 2 && soKetNoi <= 10 && soKetNoi>0) {
    tongTienCap = 15 + 75 + 50 * soKenhCaoCap;
  }else if(chonLoaiKH == 2 && soKetNoi>10){
    tongTienCap = 15 + 75 + 50 * soKenhCaoCap + 5 * (soKetNoi - 10);
  }else if(soKetNoi<=0 && chonLoaiKH == 2){
    alert("Xin bạn hãy nhập số kết nối !")
  }
  document.getElementById("txtTongTienCap").innerHTML =
    "Mã khách hàng : " + maKH + " . Tiền cáp là : " + tongTienCap.toLocaleString("en-US",{style: "currency",
    currency: "USD",});
}

document.getElementById("btnTinhTienCap").onclick = tinhTienCap;
