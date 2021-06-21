- docker-compose
- eslint
- stylelint
- prettier
- typescript
- scss
- snowpack
- svelte
- tailwindcss

# mirror

```console
git clone --depth=1 --branch=main git@github.com:himanushi/snowpack-svelte-typescript-tailwindcss.git dir-name
rm -rf ./dir-name/.git
```

# docker build

```console
cd dir-name
docker-compose build
```

# docker dive

```console
docker-compose up -d
docker-compose exec app bash
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
