# Netlify Deployment Guide

This guide walks you through deploying the Give My Kid an IEP application to Netlify.

## Quick Deploy

The fastest way to deploy:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/avophile/give-my-kid-an-IEP)

## Manual Deployment Steps

### 1. Prerequisites

- A GitHub account with this repository forked or cloned
- A free Netlify account ([sign up here](https://app.netlify.com/signup))

### 2. Connect Repository to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"** (or your git provider)
4. Authorize Netlify to access your repositories
5. Select the `give-my-kid-an-IEP` repository

### 3. Configure Build Settings

On the "Configure your site" page:

- **Branch to deploy:** `main`
- **Build command:** *(leave empty)*
- **Publish directory:** `.` *(just a period - the root directory)*
- **Functions directory:** *(leave empty)*

Click **"Deploy site"**

### 4. Wait for Deployment

Netlify will:
- Build and deploy your site (takes ~30 seconds)
- Assign a random URL like `random-name-12345.netlify.app`
- Show deployment status in real-time

### 5. Customize Your Site Name (Optional)

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter your preferred name (e.g., `give-my-kid-an-iep`)
4. Your site will be at `https://give-my-kid-an-iep.netlify.app`

### 6. Add Custom Domain (Optional)

If you have a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow Netlify's instructions to configure DNS

## What's Configured

The repository includes two Netlify configuration files:

### `netlify.toml`

- Security headers (CSP, X-Frame-Options, etc.)
- Cache control for optimal performance
- Environment configurations for production/preview

### `_redirects`

- URL redirects for better UX
- 404 handling
- Clean URL routing

## Automatic Deployments

Once connected, Netlify will automatically:

- ✅ **Deploy on push to main** - Every commit to `main` branch triggers a new deployment
- ✅ **Deploy previews** - Pull requests get their own preview URLs
- ✅ **Rollback capability** - Instantly rollback to any previous deployment

## Environment Variables

This application doesn't use environment variables (it's fully client-side), but if you need to add them later:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Enter key and value

## Monitoring

### Deployment Status

Check deployment status at:
```
https://app.netlify.com/sites/YOUR-SITE-NAME/deploys
```

### Analytics (Optional)

Enable Netlify Analytics:
1. Go to **Site settings** → **Analytics**
2. Enable analytics (paid feature, but has free trial)

## Custom Headers & Redirects

The site is pre-configured with:

**Security Headers:**
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy

**Cache Headers:**
- Long-term caching for CSS/JS (1 year)
- No-cache for HTML (always fresh)

**Redirects:**
- Clean URL handling
- 404 to homepage fallback
- Resource aliases

## Troubleshooting

### Build Failed

This shouldn't happen since there's no build process, but if it does:
- Check that publish directory is `.` (just a period)
- Ensure build command is empty
- Check Netlify deploy logs for errors

### 404 Errors

- Verify `_redirects` file is in the root directory
- Check that file names match exactly (case-sensitive)

### Security Headers Not Working

- Check `netlify.toml` is in the root directory
- Verify TOML syntax is valid
- Check Netlify deploy logs for configuration warnings

### PDF Generation Not Working

- Verify the CSP in `netlify.toml` allows jsPDF CDN
- Check browser console for errors
- Ensure `https://cdnjs.cloudflare.com` is allowed in CSP

## Performance Tips

1. **Enable Asset Optimization** (optional):
   - Site settings → Build & deploy → Post processing
   - Enable "Bundle CSS" and "Minify JS"

2. **Enable Netlify CDN** (automatic):
   - Your site is already served from Netlify's global CDN

3. **Monitor Core Web Vitals**:
   - Use Lighthouse in Chrome DevTools
   - Target: Performance score > 90

## Support

For Netlify-specific issues:
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forums](https://answers.netlify.com/)
- [Netlify Support](https://www.netlify.com/support/)

For application issues:
- [Open an issue on GitHub](https://github.com/avophile/give-my-kid-an-IEP/issues)

## Cost

Netlify's **free tier** includes:
- ✅ 100 GB bandwidth/month
- ✅ Unlimited sites
- ✅ HTTPS on all sites
- ✅ Deploy previews
- ✅ Form handling (100 submissions/month)

This is more than enough for this application. If you exceed limits, Netlify will notify you.

## Next Steps

After deployment:

1. ✅ Test the live site thoroughly
2. ✅ Update the README with your actual site URL
3. ✅ Add the Netlify status badge to README
4. ✅ Share the site with parents who need it!

---

**Your site is now live and helping parents get their children the support they need!** 🎉
