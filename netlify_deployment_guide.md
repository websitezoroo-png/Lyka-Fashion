# Netlify Deployment Guide for Lyka Fashion

This guide provides step-by-step instructions to deploy your **Lyka Fashion** website to Netlify.

## 1. Connect GitHub to Netlify
1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add new site"** and select **"Import an existing project"**.
3. Choose **GitHub** as your provider and authorize Netlify.
4. Select your repository: `websitezoroo-png/Lyka-Fashion`.

## 2. Build Settings
Netlify should automatically detect your Vite configuration, but ensure the following settings are applied:

| Setting | Value |
| :--- | :--- |
| **Build Command** | `pnpm install && pnpm build` |
| **Publish Directory** | `dist/public` |
| **Node Version** | `20` or higher |

> **Note:** Since you are using `pnpm`, Netlify will automatically use it if it detects a `pnpm-lock.yaml` file.

## 3. Environment Variables
Based on your current code, there are no mandatory custom environment variables required for the site to function. However, you should set:

*   `NODE_ENV`: `production`

If you add external services (like an email API or a payment gateway) later, you can add them in **Site settings > Environment variables**.

## 4. Database Considerations
Currently, your project **does not use a database**. All product data and content are hardcoded within the React components (e.g., `Home.tsx`).

If you want to add a database in the future to manage products dynamically:
*   **Recommended Databases**: 
    *   **Supabase** (PostgreSQL): Excellent for React apps, provides an easy-to-use API.
    *   **MongoDB Atlas**: Great if you prefer a NoSQL/JSON-like structure.
*   **Implementation**: You would need to update your `server/index.ts` to handle API requests or use Netlify Functions to interact with the database.

## 5. Handling Client-Side Routing
Since your app uses `wouter` for routing, you need to tell Netlify to redirect all traffic to `index.html`. 

1. Create a file named `_redirects` in your `client/public` folder (or `dist/public` after build).
2. Add the following line to it:
   ```text
   /*   /index.html   200
   ```
Alternatively, you can add a `netlify.toml` file to your root directory with:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 6. Final Step
Once you click **"Deploy site"**, Netlify will build your project. After a few minutes, you will receive a public URL (e.g., `lyka-fashion.netlify.app`) where your site is live!
