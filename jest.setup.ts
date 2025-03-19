import '@testing-library/jest-dom';
import { config } from 'dotenv';
import { toHaveNoViolations } from 'jest-axe';

import { TextEncoder } from 'node:util';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
config();

global.TextEncoder = TextEncoder;

expect.extend(toHaveNoViolations);
