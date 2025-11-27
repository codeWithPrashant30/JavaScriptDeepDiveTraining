"use client";

import { useParams } from 'next/navigation';
import ProductForm from "@/components/admin/ProductForm";

export default function EditProduct() {
  const params = useParams();
  const productId = params.id as string;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Edit Product</h1>
        <p className="text-gray-600 mt-1">Update product details below</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <ProductForm productId={productId} />
      </div>
    </div>
  );
}
