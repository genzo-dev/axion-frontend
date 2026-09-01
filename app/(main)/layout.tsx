import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 flex flex-col font-dm-sans">
      <Navbar />
      <main className="flex-1">
        {children}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
