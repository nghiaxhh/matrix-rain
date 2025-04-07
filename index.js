// Lấy phần tử canvas từ DOM và thiết lập context 2D
const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

// Đặt kích thước canvas bằng với kích thước cửa sổ trình duyệt
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tạo bảng chữ cái bao gồm ký tự Katakana, chữ cái Latin, và số
const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const alphabet = katakana + latin + nums;

// Kích thước font chữ và số cột trên canvas
const fontSize = 16;
const columns = canvas.width / fontSize;

// Mảng lưu vị trí dòng ký tự cho mỗi cột
const rainDrops = [];

// Khởi tạo mảng rainDrops, mỗi cột bắt đầu từ dòng đầu tiên
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 0;
}

// Hàm vẽ hiệu ứng mưa ký tự
const draw = () => {
  // Vẽ một lớp nền mờ để tạo hiệu ứng "vệt mưa"
  context.fillStyle = "rgba(11, 11, 11, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Thiết lập màu và font chữ cho ký tự
  context.fillStyle = "#0F0"; // Màu xanh lá cây
  context.font = fontSize - 2 + "px monospace";

  // Vẽ từng ký tự trong mỗi cột
  for (let i = 0; i < rainDrops.length; i++) {
    // Lấy một ký tự ngẫu nhiên từ bảng chữ cái
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    // Vẽ ký tự tại vị trí tương ứng
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    // Nếu ký tự vượt quá chiều cao canvas, đặt lại về đầu cột với xác suất 1%
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.98) {
      rainDrops[i] = 0;
    }

    // Di chuyển ký tự xuống dòng tiếp theo
    rainDrops[i]++;
  }
};

// Gọi hàm draw mỗi 30ms để tạo hiệu ứng chuyển động
setInterval(draw, 40);
