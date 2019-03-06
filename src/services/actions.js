import { actions } from '../components/Firebase'

// const FETCH_TODOS = 'FETCH_TODOS';
export const addToDo = newToDo => async dispatch => {
  actions.push().set(newToDo);
};
export const completeToDo = completeToDo => async dispatch => {
  actions.child(completeToDo).remove();
};
export const fetchList = () => async dispatch => {
  actions.on("value", snapshot => {
    dispatch({
      type: 'something',
      payload: snapshot.val()
    });
  });
};