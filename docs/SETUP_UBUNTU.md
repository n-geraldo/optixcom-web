# Ubuntu Server Setup (Laravel + React + FreeRADIUS + MikroTik)

## 1) Install dependencies
```bash
sudo apt update
sudo apt install -y nginx mysql-server php-fpm php-mysql php-xml php-mbstring php-curl php-zip composer nodejs npm freeradius freeradius-mysql
```

## 2) Database
```sql
CREATE DATABASE radius_manager CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'radius_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON radius_manager.* TO 'radius_user'@'localhost';
FLUSH PRIVILEGES;
```

## 3) Backend (Laravel API)
```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan config:cache
```

## 4) Frontend (React + Tailwind)
```bash
cd frontend
npm install
npm run build
```

Build output should be deployed to `/var/www/optixcom-web/frontend/dist` (or your selected web root path).

## 5) Nginx configuration
Create `/etc/nginx/sites-available/optixcom-radius-manager.conf`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/optixcom-web/frontend/dist;
    index index.html;

    # React SPA
    location / {
        try_files $uri /index.html;
    }

    # Laravel API proxy
    location /api/ {
        proxy_pass http://127.0.0.1:8000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Deny hidden files
    location ~ /\.|\.env {
        deny all;
    }
}
```

Enable and test:
```bash
sudo ln -s /etc/nginx/sites-available/optixcom-radius-manager.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

> For production, terminate TLS with Let's Encrypt and redirect HTTP to HTTPS.

## 6) Run backend process
For quick start:
```bash
cd /var/www/optixcom-web/backend
php artisan serve --host=127.0.0.1 --port=8000
```

For production, use PHP-FPM + Nginx upstream (recommended) or Supervisor with `php artisan octane`/queue workers.

## 7) FreeRADIUS SQL integration
- In `/etc/freeradius/3.0/mods-enabled/sql`, set database credentials.
- Ensure SQL module is enabled and used in `sites-enabled/default` and `inner-tunnel` authorize/accounting sections.

```bash
sudo systemctl restart freeradius
sudo systemctl enable freeradius
```

## 8) MikroTik NAS setup
```routeros
/radius add service=ppp address=RADIUS_SERVER_IP secret=RADIUS_SECRET authentication-port=1812 accounting-port=1813
/ppp aaa set use-radius=yes accounting=yes interim-update=5m
```

> Do **not** create `/ppp secret` entries on MikroTik.
