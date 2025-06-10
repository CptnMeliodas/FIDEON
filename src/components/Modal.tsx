import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-600 hover:text-black text-lg">&times;</button>
        {children}
      </div>
    </div>
  )
}
