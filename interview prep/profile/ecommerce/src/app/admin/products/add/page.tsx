"use client";

import ProductForm from "@/components/admin/ProductForm";

export default function AddProduct() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Add New Product</h1>
        <p className="text-gray-600 mt-1">Enter product details below</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <ProductForm />
      </div>
    </div>
  );
}
