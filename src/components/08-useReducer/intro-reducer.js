const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

// Reducer
const todoReducer = (state = initialState, action) => {

    // '?.' es para preguntar si tiene o no la propiedad 'type' y evitar error de undefined
    if (action?.type) {
        return [...state, action.payload]; // Añade el contenido de action.payload al state (es un arreglo de objeto en este ejercicio)
    }
    return state; // siempre debe retornar el state (estado)
};

// Tiene el estado actual de todo
let todos = todoReducer();

// Para añadir al objeto initialState
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

// la accion
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

// todos --> contiene el estado actual
todos = todoReducer(todos, agregarTodoAction);

console.log(todos);