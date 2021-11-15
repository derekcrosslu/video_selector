module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // transform: {
  //   "^.+\\.tsx?$": "babel-jest",
  // },
  // verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
  },
};