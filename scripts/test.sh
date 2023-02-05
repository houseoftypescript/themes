#!/bin/bash

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
