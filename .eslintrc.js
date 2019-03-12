module.exports = {
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "vue/require-v-for-key": "off",
    "vue/valid-v-for": "off"
  }
};