module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
    'react/prop-types': 'off', // Désactivez ceci si vous n'utilisez pas prop-types
  },
};
