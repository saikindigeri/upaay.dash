export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('appState');
    return data ? JSON.parse(data) : undefined;
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};