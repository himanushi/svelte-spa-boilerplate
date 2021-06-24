# 概要

Svelte で SPA を開発するための boilerplate です。 routing も含まれます。

エディターは Visual Studio Code が必須です。

# 内容

### 言語など

- svelte
- typescript
- scss

### linter & formatter

- eslint
- stylelint
- prettier

### フレームワークなど

- snowpack
- tailwindcss
- routify

# リポジトリ複製

```console
npx degit himanushi/svelte-spa-boilerplate <app-name>
cd <app-name>
npm install
```

# 開発サーバー起動

```console
npm run start
```

以下 URL をブラウザで確認

http://localhost:8080

# 本番 build

```console
npm run build
```

# Visual Studio Code の必須プラグイン

プラグイン追加後の設定変更は特に必要ありません。

ファイル保存時自動で ESLint と Prettier が整形します。

```jsonc
{
  "recommendations": [
    // svelte
    "svelte.svelte-vscode",
    // eslint
    "dbaeumer.vscode-eslint",
    // stylelint
    "stylelint.vscode-stylelint",
    // prettier
    "esbenp.prettier-vscode",
    // postcss
    "csstools.postcss",
    // TailwindCSS JIT
    "emeraldwalk.runonsave",
    // fix with vscode prettier and eslint
    "rohit-gohri.format-code-action",
    // TailwindCSS classname autocomplete
    "bradlc.vscode-tailwindcss",
    // vscode explorer icons
    "vscode-icons-team.vscode-icons"
  ]
}
```

# prettier

`svelteIndentScriptAndStyle` は、インデントが存在する場合に eslint の autofix に不具合が生じることがあるため false にしている。

# example

https://github.com/himanushi/music-client-v3
