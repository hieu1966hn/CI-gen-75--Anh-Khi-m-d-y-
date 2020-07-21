// var, let, const : 3 loại khai báo biến trong JS
// let str = `Hello world`;
// console.log( typeof str);
// str = 1;
// console.log(typeof str);
// str = true;
// console.log(typeof str);
// let y;
// console.log(typeof y);  // vì ta chưa định nghĩa nó.

// let arr = [1,2,3,4,5,5];
// console.log(arr.lastIndexOf(5));
// arr.push(6);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);


////Object
const student = {
    name: "Nguyễn Trung Hiếu",
    age: 18,
    sing: function () {
        console.log("Sinh a song: Hello");
    }
};
student.age = 30;
console.log(student.age);
console.log(student.sing()); // khi gọi 1 function -> luôn có dâu () đi kèm để gọi phương thức của nó 


// hàm trong JS.....................................
/*
có 2 kiểu khai báo function trong JS
*/
function sum(a, b) {
    return a + b;
}

const sum2 = (a,b) =>{
    return a+b;
}
/* phần này chính là function
() =>{   
}
*/
// const arr2 = [1,2,3,4,5,6,7,8,9,10]
// const myFunction = (arr) =>{
//     for(let key of arr){
//         console.log(key);
//     }
// }
/// gọi hàm in ra các phần tử trong mảng.
// console.log(myFunction(arr2));


// const function2 = ()=>{
//     if(true){
//         const a = 10;// ở ngoài không thể truy xuất đc biến a này (vì biến nó chỉ tồn tại trong cặp ngoặc nhọn if này thôi )
//         // thế nhưng dùng var lại có thể ra đc. = > hạn chế dùng var thôi.

//     }
//     console.log(a);
// };
// function2();
// Quy tắc đặt tên: camelCase


// const myFirstVariable = 2;

//  trang luyện tập JS: 

/*
HTML: ngôn ngữ đánh dấu siêu văn bản
*/
console.log(document.querySelector(`.content`).innerHTML);

const button = document.getElementById("my-button");
button.addEventListener(`click`,function(){
    // document.querySelector(`.content`).innerHTML = "Hello World!!!";
    // document.querySelector(`.content`).style = "font-size: 30px";
    document.querySelector(`.content`).classList.add(`size-30px`);
});