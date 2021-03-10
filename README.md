- docker-compose
- eslint
- stylelint
- prettier
- snowpack
- svelte
- tailwindcss

# clone

```console
git clone --depth=1 --branch=main git@github.com:himanushi/docker-eslint-stylelint-prettier-snowpack-svelte-typescript-tailwindcss.git dir-name
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

# svelte server

```console
npm run start
```
