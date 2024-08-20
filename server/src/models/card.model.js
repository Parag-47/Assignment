import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cardSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      index: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      index: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

cardSchema.plugin(mongoosePaginate);
cardSchema.index({title: "text"});
const Card = mongoose.model("Card", cardSchema);
Card.createIndexes();
export default Card;