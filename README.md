# Offshore Portal

A Next.js-based web application for offshore company formation services.

## Features

- Modern UI with responsive design
- Static site generation for fast loading
- Easy deployment to GitHub Pages or any static hosting service

## Development

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd offshore-portal

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

### Serving the Production Build Locally

```bash
npm run serve
```

This will serve the production build at [http://localhost:8080](http://localhost:8080).

## Deployment

### Deploying to GitHub Pages

1. Run the deploy script:

```bash
npm run deploy
```

This will:
- Build the Next.js app
- Copy the build files to the `gh-pages` directory

2. Push the contents of the `gh-pages` directory to your GitHub Pages repository.

### Deploying to Other Static Hosting Services

The static files in the `out` directory can be deployed to any static hosting service like Netlify, Vercel, or AWS S3.

## Project Structure

- `app/`: Next.js app directory containing pages and components
- `public/`: Static assets like images and fonts
- `out/`: Production build output
- `gh-pages/`: Files ready for GitHub Pages deployment

## Configuration

- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `deploy.sh`: Deployment script

## License

[MIT](LICENSE)
