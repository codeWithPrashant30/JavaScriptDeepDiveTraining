"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  orderStatus: string;
  totalPrice: number;
  createdAt: string;
  orderItems: OrderItem[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">No orders found</h2>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order._id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Order #{order._id}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.orderStatus === 'Delivered' ? 'bg-green-200 text-green-800' :
                order.orderStatus === 'Shipped' ? 'bg-blue-200 text-blue-800' :
                'bg-yellow-200 text-yellow-800'
              }`}>
                {order.orderStatus}
              </span>
            </div>
            <p className="text-gray-600 mb-2">
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="font-medium mb-4">Total: ${order.totalPrice.toFixed(2)}</p>
            <h3 className="font-semibold mb-2">Items:</h3>
            <ul className="list-disc list-inside space-y-1">
              {order.orderItems.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity}, Price: ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
