import { ButtonType } from "./enum.js";
import { renderTodoList } from "./main.js";

export const todoButton = (callbackFn, btnType) => {
  const todoBtn = document.createElement("button");
  todoBtn.innerText = btnType === ButtonType.delete ? "❌" : "✅";
  todoBtn.addEventListener("click", (event) => {
    const todoId = event.target.parentElement.id;
    callbackFn(todoId);
    renderTodoList();
  });

  return todoBtn;
};
