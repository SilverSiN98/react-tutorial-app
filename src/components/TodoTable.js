import Table from 'react-bootstrap/Table';

export default function TodoTable(props) {
  const todoItems = props.datasource.map((item) => {
    return (
      <tr key={item.todoItemId}>
        <td>{item.todoItemId}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td><button onClick={() => props.onShow(item)}>Edit</button></td>
        <td><button onClick={() => props.onRemove(item)}>Delete</button></td>
      </tr>
    );
  });

  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th width="20">ID</th>
          <th width="200">Title</th>
          <th width="800">Description</th>
          <th width="50"></th>
          <th width="50"></th>
        </tr>
      </thead>
      <tbody>
        {todoItems}
        <tr>
          <td colSpan={5}>
            <button onClick={() => props.onShow({todoItemId: 0, title: "", description: ""})}>
              Add New Item
            </button></td>
        </tr>
      </tbody>
    </Table>
  );
}