module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'eslint-config-prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'jsx-runtime': {
            plugins: ['react'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                jsxPragma: null, // for @typescript/eslint-parser
            },
            rules: {
                'react/react-in-jsx-scope': 0,
                'react/jsx-uses-react': 0,
            },
        },
    },
};
