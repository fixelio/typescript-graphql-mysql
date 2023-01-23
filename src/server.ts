import errorHandler from './middleware/errorHandler';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { graphqlHTTP } from 'express-graphql';
import { schema } from './schemas';

const createServer = (): express.Application => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(bodyParser.json());

  app.disable('x-powered-by');

  app.use(errorHandler);

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));

  return app;
}

export default createServer;