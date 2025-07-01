# Clinexa Digital Deployment Guide

This project includes a Vercel configuration for deploying the application as a serverless site.

## Prerequisites

- Node.js 18 or newer
- A Vercel account
- `SENDGRID_API_KEY` environment variable (required for the contact form)
- `DATABASE_URL` if you plan to run database migrations

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

The server listens on port **5000**.

## Building

Create a production build with:

```bash
npm run build
```

The build output is generated in `dist/public` as configured in `vercel.json`.

## Deploying to Vercel

1. Install the Vercel CLI if you have not already:

   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:

   ```bash
   vercel login
   ```

3. Set the required environment variables in Vercel. At a minimum, provide `SENDGRID_API_KEY`. If you use a database, also set `DATABASE_URL`.

4. Deploy the project:

   ```bash
   vercel --prod
   ```

Vercel will use `vercel.json` to build the project with `vite build` and serve the output from `dist/public`.

