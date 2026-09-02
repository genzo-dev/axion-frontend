import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 flex flex-col font-dm-sans py-24 px-6 sm:px-12 lg:px-10 2xl:px-40">
      <Navbar />
      <main className="flex-1">
        {children}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
