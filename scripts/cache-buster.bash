# Cache Busting
version=`date +%s`

sed -i -e "s/\/\(index.js\)\"/\/\1?ver=$version\"/" build/index.html
sed -i -e "s/\/\(index.css\)\"/\/\1?ver=$version\"/" build/index.html
