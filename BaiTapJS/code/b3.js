const random_number = Math.floor(Math.random() * 2); // Sinh số ngẫu nhiên từ 0 đến 10

function guessNumber() {
    let user_guess;

    while (true) {
        // Yêu cầu người dùng nhập số từ bàn phím
        user_guess = prompt("Hãy đoán số (nhập từ 1 đến 10): ");

        // Kiểm tra xem người dùng nhập đúng hay không
        user_guess = parseInt(user_guess);
        if (!isNaN(user_guess) && user_guess >= 1 && user_guess <= 10) {
            break;
        } else {
            alert("Số nhập vào không đúng. Hãy nhập lại.");
        }
    }

    // Kiểm tra xem người dùng đã đoán đúng số chưa
    if (user_guess === random_number) {
        alert("Chúc mừng! Bạn đã đoán đúng số.");
    } else {
        alert("Rất tiếc, số đúng là " + random_number + ". Bạn hãy thử lại.");
    }
}

// Gọi hàm để bắt đầu chương trình
guessNumber();

