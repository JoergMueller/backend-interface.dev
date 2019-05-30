import mongoose from 'mongoose';

const preSchema = {
  createdAt: { type: Date, default: null },
  updatedAt: { type: Date, default: null },
  username: { type: String, index: true },
  userpassword: { type: String, index: true },
  email: { type: String, index: true },
  status: { type: ['inactive', 'active', 'blocked', 'unverified'], default: 'unverified' },
};

const Users = (handler: any) => {
  const Schema = new mongoose.Schema(preSchema, {
    toObject: {
      getters: true,
      virtuals: true,
      transform: (doc, ret, options) => {
        delete ret._id;
        return ret;
      },
    },
    toJSON: {
      getters: true,
      virtuals: true,
    },
    collection: 'Users',
  });

  Schema.virtual('id').get((self: any) => {
    return self._id;
  });

  Schema.post('init', (doc) => {
    return '%s has been initialized from the db ' + doc._id;
  });
  Schema.post('validate', (doc) => {
    return '%s has been validated (but not saved yet) ' + doc._id;
  });
  Schema.post('save', (doc) => {
    return '%s has been saved ' + doc._id;
  });
  Schema.post('remove', (doc) => {
    return '';
  });

  handler.model('Users', Schema);
  return Schema;
};

export default Users;
