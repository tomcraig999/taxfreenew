#!/bin/bash

# Build the Next.js app
npm run build

# Create a directory for GitHub Pages
mkdir -p gh-pages

# Copy the static export to the gh-pages directory
cp -R .next/static gh-pages/
cp -R out/* gh-pages/ 2>/dev/null || :

# Create a simple index.html if it doesn't exist
if [ ! -f gh-pages/index.html ]; then
  echo "<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title>taxfreecompanies</title>
  <link rel='stylesheet' href='static/css/main.css'>
</head>
<body>
  <div id='root'></div>
  <script src='static/js/main.js'></script>
</body>
</html>" > gh-pages/index.html
fi

echo "Deployment files prepared in the gh-pages directory."
echo "You can now upload these files to your web hosting service or GitHub Pages."
