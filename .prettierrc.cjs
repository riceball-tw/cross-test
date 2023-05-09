module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 120,
    bracketSpacing: true,
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.cjs',
};
