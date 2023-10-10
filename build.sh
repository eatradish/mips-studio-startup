#!/bin/bash

DIR="$(pwd)"

wget https://mirrors.bfsu.edu.cn/github-release/VSCodium/vscodium/LatestRelease/VSCodium-linux-x64-1.83.0.23277.tar.gz \
	-O vscodium.tar.gz
mkdir -pv "$DIR"/resources/vscodium
cd "$DIR"/resources/vscodium
tar xvf "$DIR"/vscodium.tar.gz
mkdir -pv "$DIR"/resources/vscodium/data
cd "$DIR"
npm run electron:build
