const initialState = {
  tasks: {
    todo: [],
    inProgress: [],
    done: [],
  },
  // multi-filter support
  filter: { category: '', priority: '', dueDate: '' },
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { task, section } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [section]: [...state.tasks[section], task],
        },
      };
    }
    case 'MOVE_TASK': {
      const { taskId, sourceSection, destinationSection } = action.payload;
      const task = state.tasks[sourceSection].find((t) => t.id === taskId);
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [sourceSection]: state.tasks[sourceSection].filter((t) => t.id !== taskId),
          [destinationSection]: [...state.tasks[destinationSection], task],
        },
      };
    }
    case 'SET_FILTER': {
      const { filterType, filterValue } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [filterType]: filterValue,
        },
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
