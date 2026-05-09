import "./globals.css";

export const metadata = {
  title: "Saurabh Portfolio",
  description: "Full Stack & App Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
