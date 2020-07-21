const view = {}; // dùng để hiển thị lên màn hình giao diện cho người dùng

view.setAtiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById("app").innerHTML = components.welcomeScreen;
            // lí do có thể link đc với các file js khác ( do đều nhúng vào html);
        break;
        case 'registerScreen':
        // in ra man hinh login
        document.getElementById("app").innerHTML = components.registerScreen
        break;
    }
}