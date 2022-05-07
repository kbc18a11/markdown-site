import {
  describe,
  expect,
  test,
} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { initMarkdownTextList } from 'stores/MarkdownTextListStore';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Simple working test', () => {
  test('should render correctly', () => {
    // マークダウンのリストを初期化
    initMarkdownTextList();

    // レンダリング
    const { container, getByText, getByRole } = render(<Header />, { wrapper: MemoryRouter });

    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Markdonw Site')).toMatchSnapshot();

    fireEvent.click(getByRole('button'));
    expect(getByText('マークダウン一覧')).toMatchSnapshot();
  });
});
