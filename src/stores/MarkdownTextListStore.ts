import { MarkdownText } from 'types/MarkdownText';

type ActionsType = {
  type: 'add' | 'delete' | 'update',
  value: MarkdownText
};

export const initialState: MarkdownText[] = [];

/**
 * 初期化処理
 */
export const initMarkdownTextList = () => {
  initialState[0] = {
    id: 0,
    name: 'test0',
    text: 'test',
  };
  initialState[1] = {
    id: 1,
    name: 'test1',
    text: 'test',
  };
};

export const reducer = (state: MarkdownText[], action: ActionsType) => {
  switch (action.type) {
    case 'add':
      return [...state, action.value];
    default:
      throw new Error();
  }
};
