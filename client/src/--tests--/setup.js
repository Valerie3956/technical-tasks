import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import axios from 'axios';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

//setup different localhost for testing purposes

axios.defaults.baseURL = 'http://localhost:8000'