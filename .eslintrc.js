module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@unocss',
        '@nuxtjs/eslint-config',
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['prettier'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'prettier/prettier': 1,
    },
}
