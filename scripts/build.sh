#!/bin/bash

echo "build next-app-hero"
yarn workspace next-app-hero build
echo "build next-app-landing"
yarn workspace next-app-landing build
echo "build next-app-minimal"
yarn workspace next-app-minimal build
echo "build next-profile-astronout"
yarn workspace next-profile-astronout build
echo "build next-profile-card"
yarn workspace next-profile-card build
echo "build next-profile-minimal"
yarn workspace next-profile-minimal build
echo "build next-store-minimal"
yarn workspace next-store-minimal build
