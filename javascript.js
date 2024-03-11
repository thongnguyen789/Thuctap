
function searchProduct() {
    var searchTerm = document.getElementById("searchInput").value;
    // Giả sử bạn có một hàm kiểm tra sự tồn tại của sản phẩm trong cơ sở dữ liệu
    // Đây là một ví dụ đơn giản
    var productExists = checkProductExistence(searchTerm);
  
    if (productExists) {
      document.getElementById("searchResult").innerText = "Sản phẩm đã được tìm thấy!";
    } else {
      document.getElementById("searchResult").innerText = "Sản phẩm bạn tìm kiếm không có trong cơ sở dữ liệu!";
    }
  }
  
  function checkProductExistence(searchTerm) {
    // Đây là nơi bạn sẽ thực hiện kiểm tra sự tồn tại của sản phẩm trong cơ sở dữ liệu
    // Trong ví dụ này, chúng ta sẽ giả định rằng sản phẩm không tồn tại
    return false;
  }
  