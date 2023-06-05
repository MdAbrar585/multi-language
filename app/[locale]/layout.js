import './globals.css'
import { Inter } from 'next/font/google'

import {useLocale} from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children,params }) {

  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}</body>
    </html>
  )
}
