import mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
  type:{
    type:String,
    enum:['Point'],
    required: true,
  },
  coordinates:{
    type:[Number],
    required: true,
  }
});

const DevSchema = new mongoose.Schema({
  name: String,
  login_git_hub:String,
  bio: String,
  avatar_url:String,
  tecks: [String],
  location:{
    type: PointSchema,
    index: '2dsphere'
  }
});


export default mongoose.model('Dev', DevSchema);
