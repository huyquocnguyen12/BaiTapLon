function KiemTraTenDN(){
    var re = /^[a-z]\w*/;
    if(re.test(document.getElementById('txtDN').value.trim()) == false) {
        tendn.innerText = "*bắt buộc, bắt đầu bằng ký tự";
        return false;
    }else{
        tendn.innerText = "*"
        return true;
    }
}

function KiemTraPassWord(){
    var re = /(?=.*\d).{6,}/;
    if(re.test(document.getElementById('txtMK').value.trim()) == false) {
        mk.innerText = "*phải có chữ, số, ít nhất 6 ký tự";
        return false;
    }else{
        mk.innerText = "*"
        return true;
    }
}

function KiemTraXacNhanPassWord(){
    if(document.getElementById('txtXNMK').value != document.getElementById('txtMK').value) {
        xnmk.innerText = "*phải giống ô mật khẩu";
        return false;
    }else{
        xnmk.innerText = "*"
        return true;
    }
}

function KiemTraNgaySinh() {
    var ns = new Date(document.getElementById('txtNS').value);
    var today = new Date();
    if (today.getFullYear() - ns.getFullYear() <= 10) {
        document.getElementById('ngaysinh').innerText = "Tuổi phải lớn hơn 10";
        return false;
    } else {
        document.getElementById('ngaysinh').innerText = "*";
        return true;
    }
}

function KiemTraSoDienThoai() {
    var dt = document.getElementById('txtDT').value.trim();
    var re = /^0\d{9}$/;
    if (re.test(dt)) {
        document.getElementById('dienthoai').innerText = "*";
        return true;
    } else {
        document.getElementById('dienthoai').innerText = "Phải là SĐT hợp lệ (10 số, bắt đầu bằng 0)";
        return false;
    }
}

function KiemTraEmail() {
    var email = document.getElementById('txtEmail').value.trim();
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        document.getElementById('email').innerText = "*";
        return true;
    } else {
        document.getElementById('email').innerText = "Nhập đúng địa chỉ email";
        return false;
    }
}


function SubmitForm(){
    if(KiemTraTenDN() == false || KiemTraPassWord() == false || KiemTraXacNhanPassWord() == false){
        alert("Bạn chưa nhập đầy đủ thông tin");
        return false;
    }
    return true;
}


