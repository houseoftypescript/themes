#!/bin/bash

# Gatsby
echo "build gatsby-app-hero"
yarn workspace gatsby-app-hero export
# Next.js
echo "next-app-hero"
yarn workspace next-app-hero export
echo "next-app-landing"
yarn workspace next-app-landing export
echo "next-app-minimal"
yarn workspace next-app-minimal export
echo "next-profile-astronout"
yarn workspace next-profile-astronout export
echo "next-profile-card"
yarn workspace next-profile-card export
echo "next-profile-minimal"
yarn workspace next-profile-minimal export
echo "next-store-minimal"
yarn workspace next-store-minimal export
