# Resound

A modern web application built with Next.js, Prisma, and PostgreSQL, featuring secure authentication via Better Auth and smooth UI components with Tailwind CSS, shadcn/ui, Framer Motion, and Lenis.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or newer recommended)
- [Docker & Docker Compose](https://www.docker.com/) (Optional, for easy full-stack setup or running the database)
- [PostgreSQL](https://www.postgresql.org/) (If running the database natively without Docker)

## 🚀 Bootstrapping the Application

You can bootstrap the application using either **Docker Compose** (recommended for quick start) or a **Manual Local Setup**.

### Method 1: Using Docker Compose (Easiest)

This method spins up both the PostgreSQL database and the Next.js development server automatically.

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone <repository-url>
   cd resound
   ```

2. **Set up Environment Variables**
   Ensure an `.env` file exists in the root directory. If not, create one based on the required structure:
   ```env
   BETTER_AUTH_SECRET=your_super_secret_string
   BETTER_AUTH_URL=http://localhost:3000
   
   # Note the '@db:5432' host, which matches the docker-compose service name
   DATABASE_URL="postgresql://resound:mysecretpassword@db:5432/resound"
   
   # Google OAuth configuration (Optional)
   GOOGLE_CLIENT_ID="your-client-id"
   GOOGLE_CLIENT_SECRET="your-client-secret"
   ```

3. **Start the application**
   ```bash
   docker-compose up -d
   ```
   This command pulls the necessary images, installs Node.js dependencies, and starts the development server at [http://localhost:3000](http://localhost:3000).

---

### Method 2: Manual Local Setup

Use this method if you prefer running the Next.js development server locally on your machine for better performance and debugging.

1. **Clone the repository and install dependencies**
   ```bash
   git clone <repository-url>
   cd resound
   npm install
   ```

2. **Set up the Database**
   You can either install PostgreSQL natively or run it via Docker. To run just the database using Docker:
   ```bash
   docker-compose up db -d
   ```

3. **Configure Environment Variables**
   Create an `.env` file in the root directory. **Important:** Since you are running the app locally, update the `DATABASE_URL` host to `localhost`.
   ```env
   BETTER_AUTH_SECRET=your_super_secret_string
   BETTER_AUTH_URL=http://localhost:3000
   
   # Change '@db:5432' to '@localhost:5432' for manual local setup
   DATABASE_URL="postgresql://resound:mysecretpassword@localhost:5432/resound"
   ```

4. **Initialize Prisma**
   Sync the database schema and generate the Prisma Client:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
   *Note: If you have migration files, run `npx prisma migrate dev` instead of `db push`.*

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL
- **Authentication:** [Better Auth](https://better-auth.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)

---

Contributions and feedback are welcome!
