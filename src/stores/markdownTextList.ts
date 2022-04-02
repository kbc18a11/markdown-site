import { MarkdownText } from 'types/MarkdownText';

type ActionsType = {
  type: 'add' | 'delete' | 'update',
  value: MarkdownText
};

export const initialState: MarkdownText[] = [
  {
    id: -1,
    name: 'test',
    text: 'test',
  },
];

export const reducer = (state: MarkdownText[], action: ActionsType) => {
  switch (action.type) {
    case 'add':
      return [...state, action.value];
    default:
      throw new Error();
  }
};
