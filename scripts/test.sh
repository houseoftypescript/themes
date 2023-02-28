#!/bin/bash

# Gatsby
echo "test gatsby-app-hero"
yarn workspace gatsby-app-hero test
echo "test gatsby-app-landing"
yarn workspace gatsby-app-landing test
echo "test gatsby-profile-card"
yarn workspace gatsby-profile-card test
# Next.js
echo "test next-app-hero"
yarn workspace next-app-hero test
echo "test next-app-landing"
yarn workspace next-app-landing test
echo "test next-app-minimal"
yarn workspace next-app-minimal test
echo "test next-profile-astronout"
yarn workspace next-profile-astronout test
echo "test next-profile-card"
yarn workspace next-profile-card test
echo "test next-profile-minimal"
yarn workspace next-profile-minimal test
echo "test next-store-minimal"
yarn workspace next-store-minimal test
