import Header from "./Header"
import Footer from "./Footer"
import FloatingCTA from "./FloatingCTA"

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingCTA />
    </>
  )
}
