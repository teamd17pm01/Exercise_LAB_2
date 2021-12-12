import {useReducer} from 'react';

import {myBooksData, categoriesData} from '@utils/mocks/lab6';

const initState = {
  profile: {
    userName: 'Hungpham',
    point: 200,
  },
  myBooks: myBooksData,
  categories: categoriesData,
  selectedCategory: 1,
};

const initReducer = (state, action) => {
  switch (action.payload.type) {
    case 'setProfile':
      return {...state};
    default:
      break;
  }
};

export const useModels = () => {
  const [state, dispatch] = useReducer(initReducer, initState);
  return {
    state,
    dispatch,
  };
};
