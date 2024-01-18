var a;
// Lấy giá trị từ người dùng
a = prompt("Nhập vào một số", "Nhập ở đây...");

// Chuyển sang kiểu number
a = parseInt(a);

// Kiểm tra số chẵn và lẽ
if (a % 2 == 0) {
    document.write("" + a + " là số chẵn");
} else {
    document.write("" + a + " là số lẻ");
}