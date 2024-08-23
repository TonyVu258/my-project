export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, cardNumber, expiryDate, cvv } = req.body;
        console.log('Payment form data:', { name, email, cardNumber, expiryDate, cvv });
        res.status(200).json({ message: 'Payment processed successfully!' });
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
