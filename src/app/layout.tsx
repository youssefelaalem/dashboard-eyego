import ClientAuthGuard from "./ClientAuthGuard";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Eyego</title>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <StoreProvider>
          <ClientAuthGuard>{children}</ClientAuthGuard>
        </StoreProvider>
      </body>
    </html>
  );
}
