import WebsiteFooter from "./_components/Footer"
import WebsiteHeader from "./_components/Header"

function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebsiteHeader />
      <main>{children}</main>
      <WebsiteFooter />
    </>
  )
}

export default WebsiteLayout
