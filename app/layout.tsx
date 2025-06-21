import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DISIPLINKU - Sistem Pencatat Pelanggaran Siswa Digital',
  description: 'Platform digital terdepan untuk mencatat, memantau, dan mengelola pelanggaran siswa dengan sistem yang terintegrasi dan mudah digunakan.',
  keywords: 'sistem sekolah, pencatat pelanggaran, manajemen siswa, disiplin sekolah, aplikasi sekolah',
  authors: [{ name: 'DISIPLINKU Team' }],
  openGraph: {
    title: 'DISIPLINKU - Sistem Pencatat Pelanggaran Siswa Digital',
    description: 'Platform digital terdepan untuk mencatat, memantau, dan mengelola pelanggaran siswa',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}