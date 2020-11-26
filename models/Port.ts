import mongoose, { Schema, Document } from 'mongoose';

export interface IPort extends Document {
  country: string;
  location: string;
  name: string;
  coordinates: ['Point'];
}

const PortSchema: Schema = new Schema({
  country: { type: String, required: true},
  location: { type: String, required: true },
  name: { type: String, required: true },
  coordinates: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

export default mongoose.model<IPort>('Port', PortSchema);