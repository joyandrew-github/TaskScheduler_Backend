import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            'prisma/migrations/**',
            'logs/**',
            '.git/**',
            '.env*',
            'coverage/**'
        ]
    },
    js.configs.recommended,
    prettier,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                process: 'readonly',
                console: 'readonly',
                Buffer: 'readonly',
                global: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                }
            ],
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error', 'info']
                }
            ],
            'no-useless-catch': 'off',
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            semi: ['error', 'always'],
            indent: ['error', 4],
            'comma-dangle': ['error', 'never'],
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1
                }
            ],
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'brace-style': ['error', '1tbs'],
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always'
                }
            ],
            'arrow-spacing': 'error',
            'key-spacing': 'error',
            'comma-spacing': 'error',
            'no-trailing-spaces': 'error',
            'no-var': 'error',
            'prefer-const': 'error'
        }
    }
];
