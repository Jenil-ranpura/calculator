let btn = document.querySelectorAll("button");
let input = document.querySelector(".input");
let string = "";

btn.forEach((val) => {
	val.addEventListener("click", (e) => {
		if(val.innerHTML == "AC") {
			string = "";
			input.value = string;
		}else if(val.innerText == "Del") {
			string = string.slice(0, string.length - 1);
			input.value = string;
		}else if(val.innerText == "=") {
			string = eval(string);
			input.value = string;
		}else{
			string = string + val.innerText;
			input.value = string;
		}
	})
})

// btn.forEach((val) => {
// 	val.addEventListener("click", (e) => {
// 		if(e.target.innerHTML == "AC") {
// 			string = "";
// 			input.value = string;
// 		}
// 		else if(e.target.innerHTML == "Del") {
// 			string = string.substring(0, string.length - 1);
// 			input.value = string;
// 		}
// 		else if(e.target.innerHTML == "=") {
// 			string = eval(string);
// 			input.value = string;
// 		}else{
// 			string = string + e.target.innerHTML;
// 			input.value = string;
// 		}
// 	})
// })

