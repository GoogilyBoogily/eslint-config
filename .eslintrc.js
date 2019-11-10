'use strict';

module.exports = {
  'parserOptions': {
    'ecmaVersion': 2017
  },
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 'off',
    'strict': 2,
    'eqeqeq': 2,
    'no-var': 2,
    'prefer-const': 2,
    'no-invalid-this': 2,
    'no-multi-spaces': 2,
    'no-return-await': 2,
    'no-trailing-spaces': 2,
    'one-var': [
      'error',
      'never'
    ],
    'curly': 'error',
    'lines-around-directive': [
      'error',
      'always'
    ],
    'comma-dangle': 'error',
    'no-floating-decimal': 'error',
    'no-useless-return': 'error',
    'arrow-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs'
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': [
          'const',
          'let',
          'var'
        ]
      },
      {
        'blankLine': 'always',
        'prev': 'directive',
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': 'directive',
        'next': 'directive'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': [
          'break',
          'class',
          'continue',
          'do',
          'export',
          'for',
          'function',
          'if',
          'switch',
          'throw',
          'try',
          'while'
        ]
      },
      {
        'blankLine': 'always',
        'prev': [
          'break',
          'class',
          'continue',
          'do',
          'export',
          'for',
          'function',
          'if',
          'switch',
          'throw',
          'try',
          'while'
        ],
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'block-like'
      }
    ]
  }
};
