import { Schema, model, models, Document, Model, Types } from 'mongoose';

interface OrderItem {
  product: Types.ObjectId;
  name: string;
  quantity: number;
  image: string;
  price: number;
  variant?: {
    size?: string;
    color?: string;
  };
}

interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phoneNo: string;
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: {
    id: string;
    status: string;
    amountPaid: number;
    paidAt: Date;
  };
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: string;
  deliveredAt?: Date;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    variant: {
      size: String,
      color: String
    }
  }],
  shippingInfo: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    phoneNo: {
      type: String,
      required: true
    }
  },
  paymentInfo: {
    id: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    amountPaid: {
      type: Number,
      required: true
    },
    paidAt: {
      type: Date,
      required: true
    }
  },
  itemsPrice: {
    type: Number,
    required: true,
    min: 0
  },
  taxPrice: {
    type: Number,
    required: true,
    min: 0
  },
  shippingPrice: {
    type: Number,
    required: true,
    min: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  orderStatus: {
    type: String,
    required: true,
    enum: {
      values: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
      message: 'Please select correct order status'
    },
    default: 'Processing'
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = models.Order || model<IOrder>('Order', orderSchema);

export default Order as Model<IOrder>;
