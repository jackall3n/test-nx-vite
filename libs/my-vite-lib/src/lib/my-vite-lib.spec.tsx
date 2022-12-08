import { render } from '@testing-library/react';

import MyViteLib from './my-vite-lib';

describe('MyViteLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyViteLib />);
    expect(baseElement).toBeTruthy();
  });
});
