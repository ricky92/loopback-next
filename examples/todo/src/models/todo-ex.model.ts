
import { Todo } from "./todo.model";
import { model, property } from "@loopback/repository";

@model()
export class TodoEx extends Todo {

  @property({
    type: 'string',
  })
  anotherAttribute: string;

}
