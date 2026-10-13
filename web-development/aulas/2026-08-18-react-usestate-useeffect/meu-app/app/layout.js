import "./globals.css";

export const metadata = {
  title: "Aula - Estado e Hooks (useState / useEffect)",
  description: "Exercícios da aula de React sobre useState e useEffect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
