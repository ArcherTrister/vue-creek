#! /bin/sh
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/ArcherTrister/vue-creek.git && cd vue-creek

# build sub folder
SUB_FOLDER='2.5'
mkdir $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/vue-creek/** .
cp -rf ../../examples/vue-creek/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy alpha
rm -rf temp_web