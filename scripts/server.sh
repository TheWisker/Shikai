#!/bin/bash
rm -fr ./out/*
webpack serve --node-env development --progress --color
echo Finished SERVER!