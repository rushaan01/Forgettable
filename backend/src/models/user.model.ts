import mongoose, { Schema, model } from 'mongoose';

export interface UserModel {
  auth_id: string,
  first_name: string,
  last_name: string,
  persons: mongoose.Types.ObjectId[]
  encounters: mongoose.Types.ObjectId[]
}

const schema = new Schema<UserModel>({
  auth_id: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  persons: { type: [mongoose.Types.ObjectId] },
  encounters: { type: [mongoose.Types.ObjectId] },
});

export default model<UserModel>('User', schema);
