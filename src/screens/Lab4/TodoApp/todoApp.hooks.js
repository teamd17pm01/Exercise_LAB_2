import {useEffect, useReducer} from 'react';
import {Keyboard} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const initReducer = (state, action) => {
  switch (action.payload.type) {
    case 'setTodo':
      return {...state, listTodo: [...action.payload.todo]};
    case 'setLoading':
      return {...state, loading: action.payload.loading};
    default:
      return {...state};
  }
};

const initState = {
  listTodo: [
    {
      title: 'Do homework',
      status: true,
    },
  ],
  loading: false,
};

export const useHooks = () => {
  const [state, dispatch] = useReducer(initReducer, initState);

  const getData = async () => {
    const users = await firestore().collection('Users').get();
    console.log(
      'Log App ~ file: todoApp.hooks.js ~ line 31 ~ getData ~ users',
      users,
    );
  };

  const onChangeTodo = value =>
    dispatch({type: 'setTodo', payload: {todo: {title: value, status: false}}});

  useEffect(() => {
    getData();
    return () => {
      Keyboard.dismiss();
    };
  }, []);

  return {
    state,
    dispatch,
    onChangeTodo,
  };
};
