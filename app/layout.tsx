import React from "react";

import "@/app/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Next.js + TailwindCSS + Shadcn UI</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
