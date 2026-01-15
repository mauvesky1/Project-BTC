import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center">
        <div className="w-full max-w-md md:max-w-5xl pb-24">
          {children}
        </div>
      </body>
    </html>
  );
}
