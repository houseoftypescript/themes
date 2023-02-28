#!/bin/bash

# Gatsby
echo "test gatsby-app-hero"
yarn workspace gatsby-app-hero test
echo "test gatsby-app-landing"
yarn workspace gatsby-app-landing test
echo "test gatsby-app-minimal"
yarn workspace gatsby-app-minimal test
echo "test gatsby-profile-card"
yarn workspace gatsby-profile-card test
echo "test gatsby-profile-minimal"
yarn workspace gatsby-profile-minimal test
echo "test gatsby-store-minimal"
yarn workspace gatsby-store-minimal test
# Next.js
echo "test next-app-hero"
yarn workspace next-app-hero test
echo "test next-app-landing"
yarn workspace next-app-landing test
echo "test next-app-minimal"
yarn workspace next-app-minimal test
echo "test next-profile-astronaut"
yarn workspace next-profile-astronaut test
echo "test next-profile-card"
yarn workspace next-profile-card test
echo "test next-profile-minimal"
yarn workspace next-profile-minimal test
echo "test next-store-minimal"
yarn workspace next-store-minimal test
