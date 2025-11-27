import { Schema, model, models, Document, Model, Types } from 'mongoose';

interface CartItem {
  product: Types.ObjectId;
  name: string;
  quantity: number;
  image: string;
  price: number;
  stock: number;
  variant?: {
    size?: string;
    color?: string;
  };
}

export interface ICart extends Document {
  user: Types.ObjectId;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  updatedAt: Date;
}

const cartSchema = new Schema<ICart>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
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
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    variant: {
      size: String,
      color: String
    }
  }],
  totalItems: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate totals before saving
cartSchema.pre('save', function(next) {
  if (this.items.length > 0) {
    this.totalItems = this.items.reduce((acc, item) => acc + item.quantity, 0);
    this.totalPrice = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  } else {
    this.totalItems = 0;
    this.totalPrice = 0;
  }
  this.updatedAt = new Date();
  next();
});

// Ensure stock availability before saving
cartSchema.pre('save', function(next) {
  const invalidItems = this.items.filter(item => item.quantity > item.stock);
  if (invalidItems.length > 0) {
    next(new Error(`Some items have insufficient stock`));
  }
  next();
});

const Cart = models.Cart || model<ICart>('Cart', cartSchema);

export default Cart as Model<ICart>;
