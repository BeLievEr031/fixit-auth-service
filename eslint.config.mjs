// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/*.js', "**/*.spec.ts"],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        ignores: [
            "jest.config.js",
            "**/src/*.spec.ts",
            "*.spec.ts"
        ]
    }
);