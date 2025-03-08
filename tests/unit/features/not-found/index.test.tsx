import { render } from 'tests/tools';
import { NotFoundPage } from 'src/features/not-found';
import { RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';


const setup = (): RenderResult => {
  return render(<NotFoundPage />);
};

describe('features', () => {
  describe('#not found page', () => {
    it ('should render without complication', async () => {
      const { container } = setup();
      const result = await axe(container);
      expect(result).toHaveNoViolations();
    });
  });
});
