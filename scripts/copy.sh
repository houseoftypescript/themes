#!/bin/bash

echo "create dist"
mkdir ./dist
echo "copy next-app-hero"
cp -r ./themes/next-app-hero/out ./dist/next-app-hero
echo "copy next-app-landing"
cp -r ./themes/next-app-landing/out ./dist/next-app-landing
echo "copy next-app-minimal"
cp -r ./themes/next-app-minimal/out ./dist/next-app-minimal
echo "copy next-profile-astronout"
cp -r ./themes/next-profile-astronout/out ./dist/next-profile-astronout
echo "copy next-profile-card"
cp -r ./themes/next-profile-card/out ./dist/next-profile-card
echo "copy next-profile-minimal"
cp -r ./themes/next-profile-minimal/out ./dist/next-profile-minimal
echo "copy next-store-minimal"
cp -r ./themes/next-store-minimal/out ./dist/next-store-minimal
