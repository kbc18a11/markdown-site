import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('Simple working test', () => {
  test('should render correctly', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
