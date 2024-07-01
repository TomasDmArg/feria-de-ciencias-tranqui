import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feria de ciencias - Tranqui",
  description: "Proyecto para incentivar descargas de la app Tranqui durante la feria de ciencias del 3/07/2024 en la EEST N°2 (Mar del Plata)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
