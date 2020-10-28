const inicialState = [
   {
      id: 1,
      todo: "Comprar pan",
      done: false,
   },
];

const newTodo = {
   id: 2,
   todo: "Comprar leche",
   done: false,
};

const agregarElTodoAction = {
   type: "agregar",
   payload: newTodo,
};

const todoReducer = (state = inicialState, action) => {
   if (action?.type === "agregar") {
      return [...state, action.payload];
   }

   return state;
};

let todos = todoReducer();

todos = todoReducer(todos, agregarElTodoAction);

console.log(todos);
