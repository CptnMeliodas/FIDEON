import QRCode from 'qrcode'

export async function gerarQRCode(link: string): Promise<string> {
  return await QRCode.toDataURL(link)
}
