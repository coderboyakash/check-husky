export default {
    '**/*.{ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
    '**/*.{js,jsx,json,md}': ['prettier --write', 'git add'],
  };
  