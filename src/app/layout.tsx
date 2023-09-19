import './globals.css'

export const metadata = {
  title: 'Clima',
  description: 'Clima atual da sua cidade e a previsão dos próximos dias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <head>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'></meta>
      </head>
      <body>{children}</body>
    </html>
  )
}
