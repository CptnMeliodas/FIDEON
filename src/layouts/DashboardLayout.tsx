export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="w-64 fixed h-full bg-white shadow-md">Menu</aside>
      <main className="ml-64 p-6">{children}</main>
    </div>
  )
}
