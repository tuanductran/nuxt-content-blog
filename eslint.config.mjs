import antfu from "@antfu/eslint-config";
import command from "eslint-plugin-command/config";

export default antfu(
  {
    formatters: true,
  },

  // Base Rules
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}"],
    rules: {
      // Style Rules
      "style/semi": ["error", "always"],
      "style/quotes": ["error", "double"],
      "style/arrow-parens": ["error", "always"],

      // Import Rules
      "import/order": [
        "warn",
        {
          "groups": [
            "object",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          "alphabetize": { order: "asc", caseInsensitive: true },
        },
      ],
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/no-self-import": "error",
      "import/newline-after-import": "error",

      // TypeScript Rules
      "ts/prefer-for-of": "error",
      "ts/no-unused-vars": "error",
      "ts/no-inferrable-types": [
        "error",
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],

      // Vue-Specific Rules
      "vue/no-unused-vars": "error",
      "vue/html-self-closing": [
        "error",
        {
          html: { void: "always", normal: "never", component: "always" },
        },
      ],
      "vue/max-attributes-per-line": ["error", { singleline: 3 }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multi-word-component-names": "off",

      // Best Practices
      "prefer-object-has-own": "error",
      "object-shorthand": ["error", "always"],
      "no-dupe-keys": "error",
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: { object: true },
        },
      ],
      "no-lonely-if": "error",
      "no-else-return": ["error", { allowElseIf: false }],

      // Disabled Rules
      "antfu/if-newline": "off",
      "ts/no-explicit-any": "off",
      "ts/no-non-null-assertion": "off",
      "node/prefer-global/process": "off",
      "node/prefer-global/buffer": "off",
      "perfectionist/sort-imports": "off",
    },
  },

  // Global Rules
  {
    rules: {
      "ts/no-unused-vars": "off",
    },
  },

  // Declaration Files
  {
    files: ["**/*.d.ts"],
    rules: {
      "no-var": "off",
    },
  },

  command(),
);
