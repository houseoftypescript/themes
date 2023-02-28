#!/bin/bash

# Gatsby
echo "build gatsby-app-hero"
yarn workspace gatsby-app-hero build
echo "build gatsby-app-landing"
yarn workspace gatsby-app-landing build
echo "build gatsby-app-minimal"
yarn workspace gatsby-app-minimal build
echo "build gatsby-profile-card"
yarn workspace gatsby-profile-card build
echo "build gatsby-profile-minimal"
yarn workspace gatsby-profile-minimal build
echo "build gatsby-store-minimal"
yarn workspace gatsby-store-minimal build
# Next.js
echo "build next-app-hero"
yarn workspace next-app-hero build
echo "build next-app-landing"
yarn workspace next-app-landing build
echo "build next-app-minimal"
yarn workspace next-app-minimal build
echo "build next-profile-astronaut"
yarn workspace next-profile-astronaut build
echo "build next-profile-card"
yarn workspace next-profile-card build
echo "build next-profile-minimal"
yarn workspace next-profile-minimal build
echo "build next-store-minimal"
yarn workspace next-store-minimal build
