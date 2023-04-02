#!/bin/bash
rm -fr ./dist/*
npx webpack build --node-env production --progress --color
echo Finished PROD!