import React from 'react';
import {useEffect} from 'react';
import TodoModal from './TodoModal';
import TodoTable from './TodoTable';
import TodoListService from '../services/TodoListService';

export default function TodoPage() {
  useEffect(() => {
    TodoListService.get().then((data) => setTodoList(data));
  }, []);

  const [todoList, setTodoList] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [item, setItem] = React.useState({
    todoItemId: 0,
    title: "",
    description: "",
  });

  return (
    <>
      <TodoTable
        datasource={todoList} 
        onShow={(item) => {
          setItem(item);
          setModalShow(true);
        }}
        onRemove={(removedItem) => {
          TodoListService.remove(removedItem)
            .then(() => {
              const newList = todoList.slice().filter((it) => it.todoItemId !== removedItem.todoItemId);
              setTodoList(newList);
            });
        }}
      />
      <TodoModal 
        show={modalShow}
        todoitem={item}
        onHide={() => setModalShow(false)}
        onChangeItem={(item) => setItem(item)}
        onSave={() => {
          TodoListService.createOrUpdate(item)
            .then((insertedItem) => {
              const newList = todoList.slice();
              const index = newList.findIndex((it) => it.todoItemId === insertedItem.todoItemId);

              if (index === -1) {
                newList.push(insertedItem);
              }
              else {
                newList[index] = insertedItem;
              }

              setTodoList(newList);
              setModalShow(false);
            });
        }}
      />
    </>
  );
}