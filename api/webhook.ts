export default function handler(req, res) {
  console.log('Evento recibido:', req.body)
  res.status(200).json({ received: true })
}
