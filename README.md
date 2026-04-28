# Tirupati Courier Bill Generator

## About This Repository

This repository contains a simple, user-friendly Next.js web application designed to generate and print custom consignment notes / bills for Shree Tirupati Courier Services Pvt. Ltd. (specifically configured for a Franchisee in Pandharpur).

The application provides a clean form interface to input shipping details like destination, date, AWB number, sender & receiver information, weight, and pricing. It then formats these details into a structured, print-ready bill preview layout that is optimized for printing directly from the browser or saving as a PDF.

## Features

- **Interactive Form:** Easily input all necessary details for a courier bill.
- **Real-time Preview:** See the generated bill layout instantly as you type.
- **Print-Optimized Layout:** The form is automatically hidden when printing, ensuring only the final bill is printed or saved as a PDF.
- **Modern UI:** Built with React and Tailwind CSS for a responsive, clean design.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** React
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting & Formatting:** [Biome](https://biomejs.dev/)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application is located in `src/app/page.js`.

## Future Enhancements

There are several features that can be added to improve the functionality and usability of this application:

1. **Database Integration:** Store generated bills in a database (like PostgreSQL, MongoDB, or Firebase) to maintain a history of all courier slips generated.
2. **User Authentication:** Add login functionality (e.g., using NextAuth.js or Clerk) so different franchisees or employees can log in securely and track their own generated bills.
3. **Auto-generate AWB Numbers:** Implement a system to automatically generate sequential or randomized Air Waybill (AWB) numbers.
4. **Dynamic Franchisee Details:** Create a settings page where users can update the Franchisee Name, Address, and Contact Number displayed on the bill header without modifying the code.
5. **Dashboard Analytics:** Provide a dashboard to view statistics like total parcels sent, daily revenue, and most frequent destinations.
6. **Barcode/QR Code Generation:** Automatically generate a scannable Barcode or QR code based on the AWB number and embed it directly into the bill preview.
7. **Export to CSV/Excel:** Allow users to download a summary of all generated bills in spreadsheet format for accounting purposes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
