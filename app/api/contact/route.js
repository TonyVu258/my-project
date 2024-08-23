export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, address } = req.body;
        console.log('Contact form data:', { name, email, phone, address });
        res.status(200).json({ message: 'Contact form submitted successfully!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method not allowed' });
    }
}
