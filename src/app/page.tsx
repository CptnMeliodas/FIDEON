import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white">
      <h1 className="text-4xl font-bold text-blue-800">FIDEON</h1>
      <p className="text-gray-700 mt-2">Seu currículo com selo de autenticidade</p>
      <Link href="/dashboard" className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition">
        Acessar Plataforma
      </Link>
    </main>
  )
}
