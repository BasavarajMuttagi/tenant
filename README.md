# Rarome School ERP

This project is a comprehensive School ERP (Enterprise Resource Planning) system built with Next.js, TypeScript, Prisma, and Clerk for authentication. It allows schools to manage their core information and provides a streamlined user experience.

## Features

-   **School Creation/Update:** Schools can create and update their profile information, including name, description, address, country, state, city, and phone number.
-   **Authentication:** User authentication and organization management are handled by Clerk.
-   **Organization-Based Routing:**  The application uses Clerk's organization features to manage multi-tenancy.  Schools are associated with organizations, and the URL structure reflects this (e.g., `http://<organization-slug>.localhost:3000/home`).
-   **Data Persistence:** School data is stored using Prisma and a database (configured via Prisma).
-   **Form Handling:**  Uses `react-hook-form` and Zod for form validation and submission.
-   **UI Components:**  Leverages custom UI components built with Radix UI and Tailwind CSS.
-   **Toasts:** Uses `sonner` for user notifications.
-   **Theming:** Supports light and dark themes using `next-themes`.

## Assumptions and Limitations

-   **Database:** This README assumes you're using a database supported by Prisma (e.g., PostgreSQL, MySQL, SQLite). You'll need to configure the database connection in your `.env` file (see Setup).
-   **Clerk Setup:** You need a Clerk account and project set up. You'll need to provide your Clerk publishable key and secret key in your `.env` file.
-   **Organization Slug:** The application uses the organization's slug in the URL.  Ensure your Clerk organization slugs are unique and URL-friendly.
-   **Single School per Organization:** The current implementation assumes a one-to-one relationship between a Clerk organization and a school.  Each organization can manage one school profile.
-   **Limited Functionality:** This is a basic school profile management system.  It does *not* include features like student management, course scheduling, grade reporting, etc. These would be areas for future expansion.
- **Turbopack:** The project is configured to use turbopack in development.

## Setup and Running Instructions

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up your environment variables:**

    Create a `.env` file in the root of your project and add the following, replacing the placeholder values with your actual credentials:

    ```
    DATABASE_URL="your_database_connection_string"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_secret_key"

    ```

    -   `DATABASE_URL`:  Your Prisma database connection string.  See the Prisma documentation for details on how to format this string for your chosen database.
    -   `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`:  Obtain these from your Clerk dashboard.

4.  **Set up your database schema:**

    Use Prisma Migrate to create the necessary tables in your database:

    ```bash
    npx prisma migrate dev --name init
    ```
    This command reads your `prisma/schema.prisma` file (which you'll need to create based on the models used in the provided code) and generates the corresponding database tables. *You did not provide the `schema.prisma` file, so I am making an assumption about its contents.* Here's the assumed `schema.prisma` file content:

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Next.js development server, typically on `http://localhost:3000`.  Because of the organization-based routing, you'll need to access the application through a URL like `http://<organization-slug>.localhost:3000/home` after creating an organization in Clerk.

6. **Clerk setup:**
    - Create an account/project on Clerk.
    - Create an organization within Clerk. Note the organization slug.
    - Navigate to your application using the organization slug in the URL (e.g., `http://my-school.localhost:3000/home`).

## Project Structure (Highlights)

-   `/`: Landing page.
-   `/onboarding`: Clerk's organization creation/selection page.
-   `/home`: Displays the school's information (if it exists).
-   `/form`:  Allows creating or editing the school's information.
-   `/api/school`: API endpoint for handling school creation and updates.
-   `src/components`:  Contains UI components.
-   `src/lib`:  Contains utility functions (e.g., `prisma.ts`, `utils.ts`).
-   `src/middleware.ts`:  Handles authentication and routing logic using Clerk middleware.
-   `package.json`: Contains project dependencies and scripts.

