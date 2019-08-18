module.exports = {
  // this file contains rules that will override the base .eslintrc.js
  // no-console is a warning during normal development but is being set here as an error
  // so while the pre-commit hook is running no-console will throw an
  // error and fail your commit in this case. Add any rules that you want to fail
  // a commit here.
  extends: ['./.eslintrc.js'],
  rules: {
    'no-console': 2,
    'no-debugger': 2
  }
};
