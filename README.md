# はじめに

Svelte で SPA を開発するためのセットです。ルーティングも含まれます。

git と docker と docker-compose が事前に必要となります。

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

1. リポジトリの作成

   - https://github.com/new

2. このリポジトリのコピー

```console
git clone --depth=1 --branch=main git@github.com:himanushi/snowpack-svelte-typescript-scss.git dir-name
rm -rf ./dir-name/.git

cd dir-name

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:<ユーザー名>/<新規作成したリポジトリ名>.git
git push -uf origin main
```

# 環境構築

実行中はコーヒーでも飲んで待機します。

```console
docker-compose build
docker-compose run app npm install
```

# docker-compose 起動

一度実行すれば良いです。
PC 再起動後などに再実行します。

```console
docker-compose up -d
```

# snowpack server 起動

`docker-compose up -d` 実行後に snowpack server が起動可能

```console
docker-compose exec app bash
npm run start
```

以下 URL をブラウザで確認

http://localhost:8080

# Visual Studio Code の必須プラグイン

プラグイン追加後の設定変更は特に必要ありません。

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
