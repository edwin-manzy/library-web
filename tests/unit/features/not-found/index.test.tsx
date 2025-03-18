import { RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import { SystemErrorPage } from 'src/features/errors/system-error';
import { render } from 'tests/tools';


const setup = (): RenderResult => {
  return render(<SystemErrorPage />);
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
