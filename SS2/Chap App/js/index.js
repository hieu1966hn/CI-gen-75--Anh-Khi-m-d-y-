// file khởi tạo dự án của mình ( bắt sự kiện)
const init = () => {
    console.log('Windown loaded');
    view.setAtiveScreen('registerScreen');
    // gọi hàm setAtive trong view
}
window.onload = init; // sau khi load xong hết các js thì mới bắt đầu chạy đéne cái windown.onload này
