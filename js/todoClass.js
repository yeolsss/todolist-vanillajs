import { TodoState } from "./enum.js";

export default class Todo {
  constructor(id, todo, state) {
    this._id = id;
    this._todo = todo;
    this._state = state;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get todo() {
    return this._todo;
  }
  set todo(todo) {
    this._todo = todo;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    if (state === TodoState.todo) this._state = TodoState.done;
    else this._state = TodoState.todo;
  }
}
