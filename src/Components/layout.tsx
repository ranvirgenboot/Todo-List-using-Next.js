
import ReduxProvider from '@/redux/store/provider'
import './globals.css'

export const metadata = {
  title: 'Todo App',
  description: ' ToDo App using Redux & Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
