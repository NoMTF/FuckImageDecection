@echo off
setlocal
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
call .\node_modules\.bin\wrangler.cmd login
