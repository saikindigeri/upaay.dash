export const addTask = (task, section) => ({
  type: 'ADD_TASK',
  payload: { task, section },
});

export const moveTask = (taskId, sourceSection, destinationSection) => ({
  type: 'MOVE_TASK',
  payload: { taskId, sourceSection, destinationSection },
});

export const setFilter = (filterType, filterValue) => ({
  type: 'SET_FILTER',
  payload: { filterType, filterValue },
});
