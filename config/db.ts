import mongoose from 'mongoose';

const DB_URL  = process.env.DB_URL;

// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log(`The database "${DB_URL}" has disonnected!`));

export const MongoManager = {
  connect: async (dbUri:string) => {
    const uri:string | undefined = dbUri || DB_URL;
    try {
        await mongoose.connect(uri ? uri : '', { useNewUrlParser: true });
    } catch (error) {
      throw error
    }
  },
  getConnection: () => mongoose.connection,
};

