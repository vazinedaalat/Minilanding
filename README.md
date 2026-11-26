# وزین عدالت — لندینگ حرفه‌ای

لندینگ RTL برای مؤسسه حقوقی **وزین عدالت** با React، TypeScript، Tailwind CSS و کامپوننت‌های انیمیشنی React Bits.

## اجرا (توسعه)

```bash
npm install
npm run dev
```

## Docker (سرور لینوکس)

یک سرویس nginx روی پورت `8080` — بدون root و با `/healthz`:

```bash
cp -n .env.example .env
docker compose up -d --build
```

- سایت: `http://SERVER_IP:8080`
- سلامت: `curl -I http://SERVER_IP:8080/healthz`

توقف:

```bash
docker compose down
```

پورت را با `WEB_PORT` در `.env` عوض کنید (مثلاً `80` اگر آزاد باشد: `WEB_PORT=80`).

## ویرایش متن‌ها

همهٔ متن‌ها، لینک‌های بله / اینستاگرام / تلفن و کپی مارکتینگ در یک فایل است:

`src/content/site.ts`

## استک

- React 19 + Vite + TypeScript
- Tailwind CSS 4
- React Bits (Silk, Orb, Cubes, Magnet, SpotlightCard, …)
- فونت Estedad (عناوین) و Vazirmatn (متن)
- Docker: multi-stage Node build → nginx-unprivileged:8080
