import MyApp from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <MyApp />
      </body>
    </html>
  );
}
