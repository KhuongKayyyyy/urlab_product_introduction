import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'easymde/dist/easymde.min.css';
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for toast notifications

const workSans = localFont({
  src: [
    {
      path: './fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-Thin.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal'
    }
  ],
  variable: '--font-work-sans'
});

export const metadata: Metadata = {
  title: "URLab - Product",
  description: "Product Introduction page of URLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
      </body>
    </html>
  );
}
