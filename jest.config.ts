import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  transform: { "^.+\\.tsx?$": "ts-jest" },
  testEnvironment: "node",
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  testTimeout: 10000,
};

export default jestConfig;
