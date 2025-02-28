#!/bin/bash

# Build and export the Next.js app
echo "Building and exporting the Next.js app..."
npm run build

# Remove old files from gh-pages directory
echo "Removing old files from gh-pages directory..."
rm -rf gh-pages/*

# Copy the exported files to the gh-pages directory
echo "Copying exported files to gh-pages directory..."
cp -R out/* gh-pages/

echo "Deployment files prepared in the gh-pages directory."
echo "You can now upload these files to your web hosting service or GitHub Pages."
