import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <main className="mx-auto w-full max-w-5xl px-4 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
