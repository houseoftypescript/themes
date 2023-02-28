#!/bin/bash

# 
echo "mkdir pages"
mkdir -p ./pages/gatsby
mkdir -p ./pages/next
# Gatsby
echo "cp gatsby/app-hero"
cp -r ./themes/gatsby/app-hero/public ./pages/gatsby/app-hero
# Next.js
echo "cp next/app-hero"
cp -r ./themes/next/app-hero/out ./pages/next/app-hero
echo "cp next/app-landing"
cp -r ./themes/next/app-landing/out ./pages/next/app-landing
echo "cp next/app-minimal"
cp -r ./themes/next/app-minimal/out ./pages/next/app-minimal
echo "cp next/profile-astronout"
cp -r ./themes/next/profile-astronout/out ./pages/next/profile-astronout
echo "cp next/profile-card"
cp -r ./themes/next/profile-card/out ./pages/next/profile-card
echo "cp next/profile-minimal"
cp -r ./themes/next/profile-minimal/out ./pages/next/profile-minimal
echo "cp next/store-minimal"
cp -r ./themes/next/store-minimal/out ./pages/next/store-minimal
