import { E2E_TEST_ENV } from '../environment';
import { Browser } from './browser';

export const browser = new Browser(E2E_TEST_ENV);
