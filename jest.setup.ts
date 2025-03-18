import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

import { TextEncoder } from 'node:util';

global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

expect.extend(toHaveNoViolations);
