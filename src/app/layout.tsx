import type {Metadata} from 'next';
import { Montserrat, Montserrat_Alternates} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});


const montserratMono = Montserrat_Alternates({
  variable: '--font-montserrat-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'H&T BUILDING - Văn phòng cho thuê tại Long Xuyên',
  description: 'H&T Building cung cấp văn phòng cho thuê chuyên nghiệp tại Long Xuyên với vị trí đắc địa, diện tích linh hoạt và giá thuê hợp lý.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${montserrat.variable} ${montserratMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
