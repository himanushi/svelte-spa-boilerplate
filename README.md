# はじめに

Svelte で高速で SPA を開発するためのセットです。ルーティングも含まれます。
git と docker と docker-compose が事前に必要となります。

# 内容

### 環境構築用

- docker-compose

### 言語など

- svelte
- typescript
- scss

### linter & formatter

- eslint
- stylelint
- prettier

## フレームワークなど

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

```console
docker-compose build
docker-compose run app npm install
```

# docker-compose 起動

```console
docker-compose up -d
```

# init

```console
docker-compose exec app bash
npm install
```

# svelte server

```console
npm run start
```

# vscode recommendations

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
    // fix with vscode prettier → eslint → stylelint
    "rohit-gohri.format-code-action",
    // tailwindCSS classname autocomplete
    "bradlc.vscode-tailwindcss",
    // vscode explorer icons
    "vscode-icons-team.vscode-icons"
  ]
}
```

# prettier

`svelteIndentScriptAndStyle` は、インデントが存在する場合に eslint の autofix に不具合が生じることがあるため false にしている。

`svelteIndentScriptAndStyle` is set to false because it may cause problems with eslint's autofix if indentation is present.

# example

https://github.com/himanushi/music-client-v3
