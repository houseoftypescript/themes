#!/bin/bash

# 
echo "mkdir pages"
mkdir -p ./pages/gatsby
mkdir -p ./pages/next
# Gatsby
echo "cp gatsby/app-hero"
cp -r ./server/gatsby/app-hero/public ./pages/gatsby/app-hero
echo "cp gatsby/app-landing"
cp -r ./server/gatsby/app-hero/public ./pages/gatsby/app-landing
echo "cp gatsby/profile-card"
cp -r ./server/gatsby/profile-card/public ./pages/gatsby/profile-card
# Next.js
echo "cp next/app-hero"
cp -r ./server/next/app-hero/out ./pages/next/app-hero
echo "cp next/app-landing"
cp -r ./server/next/app-landing/out ./pages/next/app-landing
echo "cp next/app-minimal"
cp -r ./server/next/app-minimal/out ./pages/next/app-minimal
echo "cp next/profile-astronout"
cp -r ./server/next/profile-astronout/out ./pages/next/profile-astronout
echo "cp next/profile-card"
cp -r ./server/next/profile-card/out ./pages/next/profile-card
echo "cp next/profile-minimal"
cp -r ./server/next/profile-minimal/out ./pages/next/profile-minimal
echo "cp next/store-minimal"
cp -r ./server/next/store-minimal/out ./pages/next/store-minimal
