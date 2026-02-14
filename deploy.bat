@echo off
REM Windows Deployment Script for Shared Hosting

echo Deploying MATHWA React Frontend to Shared Hosting...
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo Building React App for Production...
call npm run build

if %errorlevel% neq 0 (
    echo Error: Build failed!
    pause
    exit /b 1
)

echo.
echo ✅ Build Complete!
echo.
echo 📁 Files ready in 'dist' folder
echo.
echo 📝 Next Steps:
echo   1. Open Windows Explorer and navigate to: dist folder
echo   2. Select ALL files (Ctrl+A)
echo   3. Upload them to your hosting's public_html folder via FTP/SFTP
echo   4. Make sure .htaccess file is also uploaded
echo   5. Access your domain in web browser
echo.
echo 📖 For detailed instructions, read: SHARED_HOSTING_DEPLOYMENT.md
echo.
pause
