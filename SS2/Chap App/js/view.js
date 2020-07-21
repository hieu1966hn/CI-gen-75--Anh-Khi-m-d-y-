const view = {}; // dùng để hiển thị lên màn hình giao diện cho người dùng

view.setAtiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById("app").innerHTML = components.welcomeScreen;
            // lí do có thể link đc với các file js khác ( do đều nhúng vào html);
        break;
        //////////////////////////
        case 'registerScreen':
        // in ra man hinh login
        document.getElementById("app").innerHTML = components.registerScreen
        const registerForm = document.getElementById("register-form");
        registerForm.addEventListener("submit",(event)=>{
            event.preventDefault();  // không cho trình duyệt thực hiện hành động default này nữa
            const data = {
                // lấy đc dũ liệu người dùng nhập thông qua lệnh
                firstName: registerForm.firstName.value,
                lastName: registerForm.lastName.value,
                email: registerForm.email.value,
                password: registerForm.password.value,
                confirmPassword: registerForm.confirmPassword.value,
            };
            console.log(data);
            controller.register(data);
        });
        break;
    }
}