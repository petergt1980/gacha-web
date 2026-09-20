# TREEGACHAWEB

## Setup
1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and set a strong JWT_SECRET.
3. Run `npm install`.
4. Run `npx prisma migrate dev --name init`.
5. Run `npm run dev`.

## Add rewards
Use Prisma Studio: `npx prisma studio` and create Reward records. `weight` controls probability; `image` can be an image URL.

## Admin
Promote a user manually in Prisma Studio by changing `role` to `ADMIN`. Add protected admin routes before production deployment.

This starter includes authentication, server-side pull cost validation, inventory persistence, pull records, and daily reward cooldown. Harden rate limiting, CSRF strategy, validation, and admin authorization before public deployment.
