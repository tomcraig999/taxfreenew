#!/bin/bash

#!/bin/bash

# Build and export the Next.js app
echo "Building and exporting the Next.js app..."
npm run build

# Commit and push changes to gh-pages branch
git add .
git commit -m "Deploy to GitHub Pages"
git push taxfree gh-pages

echo "Website deployed to GitHub Pages."
