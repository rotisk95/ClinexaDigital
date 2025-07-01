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


### GitHub Actions Deployment

You can deploy automatically whenever you push to `main` by using the [Vercel Action](https://github.com/marketplace/actions/vercel-action).
Create a workflow file at `.github/workflows/vercel.yml` with the following contents:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - name: Vercel Action
        uses: amondnet/vercel-action@v25.2.0
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: .
          vercel-args: '--prod'
```

Add the `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` secrets in your
repository settings.

If you encounter an error like `Function Runtimes must have a valid version`,
ensure `vercel.json` specifies a supported runtime:

```json
{
  "functions": {
    "api/contact.js": { "runtime": "nodejs18.x" }
  }
}
```
