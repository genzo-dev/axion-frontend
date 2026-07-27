import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 min-h-full flex flex-col font-dm-sans">
      <main>
        <Navbar />
        {children}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
