import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles/kanban.style.css';

const Board = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Hello', status: 'todo' },
    { id: '2', title: 'World', status: 'todo' },
    { id: '3', title: 'What', status: 'inprogress' },
    { id: '4', title: 'You', status: 'inprogress' },
    { id: '5', title: 'You', status: 'done' },
    { id: '6', title: 'Doin', status: 'done' }
  ]);

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'inprogress', title: 'In Progress' },
    { id: 'done', title: 'Done' }
  ];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const sourceColumn = result.source.droppableId;
    const destinationColumn = result.destination.droppableId;

    if (sourceColumn === destinationColumn) {
      const tasksCopy = [...tasks];
      const columnTasks = tasksCopy.filter(task => task.status === sourceColumn);
      const [removed] = columnTasks.splice(sourceIndex, 1);
      columnTasks.splice(destinationIndex, 0, removed);

      setTasks(tasksCopy);
    } else {
      const tasksCopy = [...tasks];
      const [removed] = tasksCopy.splice(sourceIndex, 1);
      removed.status = destinationColumn;
      tasksCopy.splice(destinationIndex, 0, removed);

      setTasks(tasksCopy);
    }
  };

  return (
    <div className="kanbanBoard__container">
      <h1 className='text-xl'>Tasks</h1>
      <p className='mb-3'>Dashboard - Tasks</p>
      <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board">
        {columns.map((column, index) => (
          <div key={column.id} className="column">
            <h1 className='text-lg font-semibold'>{column.title}</h1>
            <div className="divider"></div>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="task-list"
                >
                  {tasks
                    .filter((task) => task.status === column.id)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="task"
                          >
                            {task.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
    </div>
  );
};

export default Board;