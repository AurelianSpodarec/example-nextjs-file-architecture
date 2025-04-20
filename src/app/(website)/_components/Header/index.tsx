import Link from "next/link";

function WebsiteHeader() {
  return (
    <header>
      <span>WebsiteHeader</span>
      <div className="flex flex-col">
        <Link href="/dashboard" className="underline text-blue-700">Go to Dashboard</Link>
        <Link href="/" className="underline text-blue-700">Page: Home</Link>
        <Link href="/about" className="underline text-blue-700">Page: About</Link>
        <Link href="contact" className="underline text-blue-700">Page: Contact</Link>
      </div>
    </header>
  );
}

export default WebsiteHeader
