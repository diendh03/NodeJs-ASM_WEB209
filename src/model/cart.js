import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    cart_id: { type: String, required: true },
    customer_id: { type: String, required: true },
    items: [
      {
        product_id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        subtotal: { type: Number, required: true },
      },
    ],
    total_price: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Cart", cartSchema);
