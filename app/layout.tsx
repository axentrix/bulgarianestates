import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'



export const metadata: Metadata = {
  title: 'Bulgarian Estates',
  description: 'Real estate listings in Bulgaria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
