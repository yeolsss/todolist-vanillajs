import { ButtonType, TodoState } from "./enum.js";
import { todoButton } from "./util.js";
import todoListCloser from "./closer.js";
import Todo from "./todoClass";

// tag 선언
const $todoForm = document.querySelector("#todo_form");
const $todoUl = document.querySelector("#todo_ul");
const $doneUl = document.querySelector("#done_ul");
const { getTodoList, addTodoList, updateTodoState, deleteTodoList } =
  todoListCloser;

export const renderTodoList = () => {
  $todoUl.innerHTML = "";
  $doneUl.innerHTML = "";
  getTodoList().forEach((todo) => {
    if (todo.state === TodoState.todo) $todoUl.prepend(createTodoCard(todo));
    else $doneUl.prepend(createTodoCard(todo));
  });
};

/**
 * todo card 생성 함수
 * @param {Todo} todo
 */
const createTodoCard = (todo) => {
  const todoLi = document.createElement("li");
  todoLi.setAttribute("id", todo.id);
  const deleteBtn = todoButton(deleteTodoList, ButtonType.delete);
  const updateBtn = todoButton(updateTodoState, ButtonType.update);
  const todoSpan = document.createElement("span");
  todoSpan.innerText = `${todo.todo}`;

  todoLi.append(deleteBtn);
  todoLi.append(updateBtn);
  todoLi.append(todoSpan);

  return todoLi;
};

// form event 설정
$todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // input 값
  const $todoInput = event.target.children.todo_input;
  const inputValue = $todoInput.value;
  if (inputValue.trim() === "") {
    alert("할 일을 입력하세요.");
    return;
  }

  // 입력 받은 todo 객체 생성하기
  const todo = new Todo(Date.now(), inputValue, TodoState.todo);
  // todoList closer에 담기
  addTodoList(todo);

  // todoList의 값을 li태그로 만들기
  renderTodoList();

  // input reset;
  $todoInput.value = "";
});
