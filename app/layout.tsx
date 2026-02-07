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
  <main className="flex-1 px-4 md:px-6">
    {children}
  </main>
  </div>
</body>

    </html>
  );
}
