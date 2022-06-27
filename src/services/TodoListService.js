const apiUrl = "https://localhost:5001/api/todoList";

const get = async () => {
  const response = await fetch(apiUrl);
  return await response.json();
}

const createOrUpdate = async (insertedItem) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(insertedItem),
  };
  const response = await fetch(apiUrl, requestOptions);
  return await response.json();
}

const remove = async (removedItem) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(removedItem),
  };
  const response = await fetch(apiUrl, requestOptions);
  return await response;
}


const TodoListService = {
  get,
  createOrUpdate,
  remove,
}

export default TodoListService