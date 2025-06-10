const benefits = [
  { title: "Segurança Aprimorada", description: "Proteja seus certificados contra fraudes e falsificações." },
  { title: "Emissão Simplificada", description: "Crie e distribua certificados digitais com facilidade." },
  { title: "Automatização Completa", description: "Automatize todo o processo de gerenciamento de certificados." },
  { title: "Transparência na Blockchain", description: "Garanta a autenticidade dos certificados com registros imutáveis." }
]

export default function BenefitsSection() {
  return (
    <section id="features" className="bg-white py-16 px-6 text-center grid gap-10 md:grid-cols-4">
      {benefits.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="text-3xl mb-2">🔹</div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </section>
  )
}
