export default function handler(req, res) {
  // Permitir CORS (útil para VTEX u otros clientes externos)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Manejar preflight CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Mostrar información general del request
  console.log('💬 Request recibido:')
  console.log('🟠 Método:', req.method)
  console.log('📦 Body:', req.body)
  console.log('📄 Headers:', req.headers)

  // Puedes personalizar la lógica según método si lo deseas
  res.status(200).json({
    status: 'ok',
    method: req.method,
    message: 'Petición recibida correctamente',
  })
}
