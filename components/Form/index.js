"use client"
import React, { useState } from 'react'
import styles from './Form.module.css';

function Form({ type }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
        message: ''
    })
    const formHandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const apiSubmit = type === 'contact'
            ? `${baseUrl}/api/contact`
            : `${baseUrl}/api/payment`;

        try {
            const response = await fetch(apiSubmit, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }
            const result = await response.json();
            console.log('Form submitted successfully:', result);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={formHandle}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={formHandle}
                    required
                    className={styles.input}
                />
            </div>
            {type === 'contact' && (
                <>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={formHandle}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="address" className={styles.label}>Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={formHandle}
                            className={styles.input}
                        />
                    </div>
                </>
            )}

            {type === 'payment' && (
                <>
                    <div className={styles.formGroup}>
                        <label htmlFor="cardNumber" className={styles.label}>Card Number:</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={formHandle}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="expiryDate" className={styles.label}>Expiry Date:</label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={formHandle}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="cvv" className={styles.label}>CVV:</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={formHandle}
                            required
                            className={styles.input}
                        />
                    </div>
                </>
            )}

            <button type="submit" className={styles.button}>
                {type === 'contact' ? 'Submit Contact Info' : 'Submit Payment Info'}
            </button>
        </form>
    );
}

export default Form