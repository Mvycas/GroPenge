# GroPenge
Dreamhost .htaccess file was modified: 

```
<IfModule mod_headers.c>
   Header set Content-Security-Policy "script-src-attr 'unsafe-hashes' 'sha256-bhHHL3z2vDgxUt0W3dWQOrprscmda2Y5pLsLg4GF+pI='"
   Header set X-XSS-Protection "1; mode=block"
   Header set X-Frame-Options "DENY"
   Header set Strict-Transport-Security "max-age=31536000" env=HTTPS
</IfModule>
<FilesMatch "\.(jpg|jpeg|png|gif|svg|js|css|webp)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

Although the duration specified in the Cache-Control directive may be relatively extended, 
it is deemed appropriate for the current use case. 

![image](https://user-images.githubusercontent.com/62817753/228679403-228b0618-b9ff-4133-a5c6-3d8d01fec039.png)
