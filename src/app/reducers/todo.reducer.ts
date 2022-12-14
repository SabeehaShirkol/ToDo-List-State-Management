import { TodoActionType } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../actions/todo.actions";
import {Todo} from "../models/Todo";

const initialState: Todo[] = [
    {title:"Title demo 1"},
    {title:"Title demo 2"},
    {title:"Title demo 3"},
];

export function TodoReducer(state = initialState, action : ActionParent) {
    switch(action.type) {
        default:
            return state;
    }
}