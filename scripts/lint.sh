#!/bin/bash

# Gatsby
echo "lint gatsby-app-hero"
yarn workspace gatsby-app-hero lint
echo "lint gatsby-app-landing"
yarn workspace gatsby-app-landing lint
echo "lint gatsby-app-minimal"
yarn workspace gatsby-app-minimal lint
echo "lint gatsby-profile-card"
yarn workspace gatsby-profile-card lint
echo "lint gatsby-profile-minimal"
yarn workspace gatsby-profile-minimal lint
echo "lint gatsby-store-minimal"
yarn workspace gatsby-store-minimal lint
# Next.js
echo "lint next-app-hero"
yarn workspace next-app-hero lint
echo "lint next-app-landing"
yarn workspace next-app-landing lint
echo "lint next-app-minimal"
yarn workspace next-app-minimal lint
echo "lint next-profile-astronaut"
yarn workspace next-profile-astronaut lint
echo "lint next-profile-card"
yarn workspace next-profile-card lint
echo "lint next-profile-minimal"
yarn workspace next-profile-minimal lint
echo "lint next-store-minimal"
yarn workspace next-store-minimal lint
