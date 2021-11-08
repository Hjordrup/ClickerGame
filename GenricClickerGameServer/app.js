const express = require('express');
const app = express();
const routes = require('./routes/routes');
const connectDB = require('./db/connect');

const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
let PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/', routes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://Admin:GjR5I76KuVaABlBe@cluster0.wrnq6.mongodb.net/ClickerDataBase?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => console.log(`Server is serving up on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
