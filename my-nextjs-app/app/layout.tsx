import './globals.css'; // Import your global CSS
import { Button } from "@/components/ui/button"
import { ReactNode } from 'react';

export const metadata = {
  title: 'DARB Professionals',
  description: 'Elevate your data analysis and reporting skills for business success',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 p-4 text-white">
          <h1 className="text-2xl">DARB Professionals</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-blue-500 p-4 text-white text-center">
          © 2024 DARB Professionals. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
