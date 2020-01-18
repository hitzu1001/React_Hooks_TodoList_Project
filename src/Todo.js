import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import teal from '@material-ui/core/colors/teal';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo, i }) {
  const [isEditing, toggleEdit] = useToggleState(false);
  return (
    <ListItem
      style={(i % 2 === 0)
        ? { backgroundColor: teal[50], height: "64px" }
        : { height: "64px" }
      }>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleEditForm={toggleEdit}
        />
      ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)} >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggleEdit} >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
    </ListItem>
  )
}

export default Todo;
