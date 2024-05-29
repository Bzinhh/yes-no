// Lấy tham chiếu đến các phần tử DOM
const messageElement = document.getElementById('message');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let count = 0; // Biến để theo dõi số lần di chuột vào chữ "Không"
let showPrompt = true; // Biến để kiểm tra xem thông báo "Hãy chọn có đi" đã hiển thị hay chưa

// Đặt sự kiện click cho nút "Có"
yesButton.addEventListener('click', function() {
  // Hiển thị thông báo "Xin chào!"
  messageElement.textContent = 'Cảm ơn!';
  // Ẩn đi cả hai nút "Có" và "Không"
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
});

// Đặt sự kiện mouseover cho chữ "Không"
noButton.addEventListener('mouseover', function() {
  if (showPrompt) {
    if (count === 3) {
      
      messageElement.textContent = 'Chọn có đi bạn ';
      showPrompt = false; // Đặt biến showPrompt thành false khi hiển thị thông báo
      return; // Ngăn chặn di chuyển nút "Không" nếu đã di chuột vào chữ "Không" 3 lần
    }
  
    count++; // Tăng số lần di chuột vào chữ "Không"
  }

  // Tạo vị trí ngẫu nhiên cho nút "Không"
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  // Di chuyển nút "Không" đến vị trí mới
  noButton.style.position = 'absolute';
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
});
