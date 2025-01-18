// pages/api/products.js
import { products } from '@/app/lib/data'; // Adjust the path as necessary

export async function GET() {
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
