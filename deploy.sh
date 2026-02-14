#!/bin/bash
# Deployment Script for Shared Hosting
# Run this script to prepare files for upload

echo "Building React App for Production..."
npm run build

echo ""
echo "✅ Build Complete!"
echo ""
echo "📁 Files ready in 'dist' folder"
echo ""
echo "📝 Next Steps:"
echo "  1. Connect to your hosting via FTP/SFTP"
echo "  2. Upload ALL files from 'dist/' to 'public_html/'"
echo "  3. Ensure .htaccess is uploaded"
echo "  4. Access your domain in browser"
echo ""
echo "📖 For detailed instructions, read: SHARED_HOSTING_DEPLOYMENT.md"
echo ""
echo "Need help? Contact your hosting provider!"
