rm -fr ./out/*
npx webpack build --node-env production --progress --color
echo All compiled!