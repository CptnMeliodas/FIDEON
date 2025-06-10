export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">FIDEON</h1>
      <div className="space-x-6 text-sm">
        <a href="#dashboard" className="hover:underline">Dashboard</a>
        <a href="#features" className="hover:underline">Features</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}
