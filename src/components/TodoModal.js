import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TodoModal (props) {
  const title = props.todoitem.todoItemId === 0 ? "New To Do Item" : "To Do Item #" + props.todoitem.todoItemId;
  const submitIsDisabled = (props.todoitem.title && props.todoitem.title.length === 0) 
    || (props.todoitem.description && props.todoitem.description.length === 0);
    
   return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            required 
            type="text" 
            placeholder="Enter title" 
            value={props.todoitem.title}
            onChange={(e) => props.onChangeItem({
              todoItemId: props.todoitem.todoItemId,
              title: e.target.value,
              description: props.todoitem.description,
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            required 
            as="textarea" 
            rows={3} 
            placeholder="Enter description" 
            value={props.todoitem.description}
            onChange={(e) => props.onChangeItem({
              todoItemId: props.todoitem.todoItemId,
              title: props.todoitem.title,
              description: e.target.value,
            })}
          />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.onSave} disabled={submitIsDisabled}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}