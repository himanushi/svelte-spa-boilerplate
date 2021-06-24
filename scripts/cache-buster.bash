# Cache Busting
version=`date +%s`

# for macOS
sed -i "" "s/\/\(index.js\)\"/\/\1?ver=$version\"/" build/index.html
sed -i "" "s/\/\(index.css\)\"/\/\1?ver=$version\"/" build/index.html

# for Linux
# sed -i -e "s/\/\(index.js\)\"/\/\1?ver=$version\"/" build/index.html
# sed -i -e "s/\/\(index.css\)\"/\/\1?ver=$version\"/" build/index.html
