import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 min-h-full flex flex-col font-dm-sans">
      <main>
        {children}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
