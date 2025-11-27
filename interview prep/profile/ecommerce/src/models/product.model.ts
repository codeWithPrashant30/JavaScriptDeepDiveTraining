import { Schema, model, models, Document, Model, Types } from 'mongoose';

interface ProductVariant {
  size?: string;
  color?: string;
  stock: number;
  price: number;
}

interface ProductReview {
  user: Types.ObjectId;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  variants?: ProductVariant[];
  category: string;
  stock: number;
  ratings: number;
  numReviews: number;
  reviews: ProductReview[];
  images: {
    url: string;
    alt?: string;
  }[];
  seller: Types.ObjectId;
  createdAt: Date;
}

const reviewSchema = new Schema<ProductReview>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const variantSchema = new Schema<ProductVariant>({
  size: String,
  color: String,
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please enter product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    min: 0
  },
  variants: [variantSchema],
  category: {
    type: String,
    required: [true, 'Please select category for this product'],
    enum: {
      values: [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
      ],
      message: 'Please select correct category for product'
    }
  },
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    min: 0,
    default: 0
  },
  ratings: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  reviews: [reviewSchema],
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: String
  }],
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate average ratings when reviews are modified
productSchema.pre('save', function(next) {
  if (this.reviews.length > 0) {
    const avg = this.reviews.reduce((acc, item) => item.rating + acc, 0) / this.reviews.length;
    this.ratings = Number(avg.toFixed(1));
    this.numReviews = this.reviews.length;
  }
  next();
});

const Product = models.Product || model<IProduct>('Product', productSchema);

export default Product as Model<IProduct>;
