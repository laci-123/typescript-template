import { add_two_numbers } from "./business_logic.ts"


const input_1 = document.getElementById("input_1")! as HTMLInputElement;
const input_2 = document.getElementById("input_2")! as HTMLInputElement;
const result = document.getElementById("result")!;

const button_add = document.getElementById("button_add")!;
button_add.addEventListener("click", (e) => {
  result.innerText = add_two_numbers(parseFloat(input_1.value), parseFloat(input_2.value)).toString();
});

