/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: [
        'prettier-plugin-astro',
        'prettier-plugin-svelte',
        'prettier-plugin-tailwindcss',
    ],
    overrides: [
        { files: '*.svelte', options: { parser: 'svelte' } },
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
