import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductDetail from '@/components/Product/ProductDetail';
import styles from "@/app/music/page.module.css"

async function fetchProductData(id) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    var response = await fetch(`${baseUrl}/api/music/${id}`);
    if (!response.ok) {
        response = await fetch(`/api/music/${id}`);
    }
    const data = await response.json();
    return data;
}

export default async function MusicItemPage({ params }) {
    const { id } = params;
    const product = await fetchProductData(id);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Header />
            <main className={`${styles.main} ${styles.mainItem}`}>
                <div>
                    <h1>Music Item Details</h1>
                    <ProductDetail product={product} />
                </div>
            </main>
            {/* <Footer /> */}
        </>
    );
}
