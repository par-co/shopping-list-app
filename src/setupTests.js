import { beforeEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

beforeEach(() => {
  cleanup();
  vi.clearAllMocks();
});
