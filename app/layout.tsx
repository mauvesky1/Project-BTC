import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<body>
  <Header />
  <div className="flex">
    <Sidebar />
  <main className="mx-auto w-full max-w-5xl px-4 pb-24">
    {children}
  </main>
  </div>
</body>

    </html>
  );
}
