console.log("Hello world !");

// Exercise

// Cho 1 danh sách todoList như sau

// Viết 1 ứng dụng quản lý các todoList
// Cho phép người dùng nhập vào 4 chữ cái C/R/U/D thông qua
// câu lệnh prompt

// - C: Khi người dùng nhập vào chữ C
// - Hiển thị lên 1 ô prompt cho phép người dùng thêm mới 1
//   todo item vào trong danh sách todoList
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - R: Khi người dùng nhập vào chữ R
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - U: Khi người dùng nhập vào chữ U
// - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
//   muốn cập nhật
// - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// - Nếu hợp lệ -> Tiếp tục hiển thị ô prompt để nhập vào nội dung mới
//   cập nhật cho todo item
// - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - D: Khi người dùng nhập vào chữ D
// - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
//   muốn xoá
// - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// - Nếu hợp lệ -> Tiến hành xoá todo item đó ra khỏi todoList
// - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

///////
// - Chương trình lặp đi lại lại vô hạn
// cho đến khi người dùng nhập vào chữ "E"

// const todoList = ["Sleep at 12pm", "Workout 2hours per day", "Do homework"];

// let loop = true;

// // B2: Khai báo hàm + ĐÓNG GÓI LOGIC
// function printTodoItem() {
//   // In ra màn hình console
//   for (let i = 0; i <= todoList.length - 1; i = i + 1) {
//     console.log(`${i + 1} -- ${todoList[i]}`);
//   }
// }

// while (loop) {
//   let userInput = prompt("Please input C/R/U/D");

//   if (userInput === "C") {
//     // Thực hiện logic thêm mới todo vào todoList
//     let newTodo = prompt("Please input new todo item");
//     //
//     todoList.push(newTodo);
//     // In ra màn hình console
//     // B3: Function Execution - Gọi/Thực thi function
//     printTodoItem();
//   } else if (userInput === "R") {
//     // Thực hiện logic in ra màn hình toàn bộ todo có trong todoList
//     // In ra màn hình console
//     printTodoItem();
//   } else if (userInput === "U") {
//     // Thực hiện logic cập nhật lại nội dung của một todo trong todoList
//     // Vị trí của todo muốn cập nhât
//     let index = +prompt("Please input todo item index that u want to update");
//     // Nội dung của todo mới muốn cập nhật
//     let content = prompt("Please input new todo content");
//     // update...
//     todoList[index - 1] = content;
//     // In ra màn hình console
//     printTodoItem();
//   } else if (userInput === "D") {
//     // Thực hiện logic xoá một todo khỏi todoList
//   } else if (userInput === "E") {
//     // Thực hiện logic thoát khỏi chương trình
//     console.log("Thanks for using this app");
//     loop = false;
//   } else {
//     console.log("Invalid command");
//   }
// }

// Example:

// Viết một hàm (Chương trình), nhận vào 2 tham số a và b
// Tính tổng a + b và ra màn hình console tổng đó

// Tham số tổng quát (đại diện) (Parameters)
function sumCalculator(number1, number2) {
  // Logic tính tổng
  // let number1 = 1;
  // let number2 = 2;
  console.log(number1 + number2);
}

// Sử dụng máy tính
// Đối số thực tế (Arguments)
sumCalculator(10, 20); // Output = 30

// Sử dụng máy tính lần 2
// Đối số thực tế (Arguments)
sumCalculator(20, 40); // Output = 60

// ... Dòng code số 1000
// Sử dụng máy tính lần thứ 1000
// Đối số thực tế (Arguments)
sumCalculator(1, 2); // Output = 3

function sum(number1, number2) {
  // Logic tính tổng
  // let number1 = 1;
  // let number2 = 2;
  console.log("Đằng trc return");
  return number1 + number2;
}

let result = sum(10, 20); // Output: 30
console.log(result);
alert(result);
alert("Tổng vừa tính thông qua hàm sum là: " + result);
