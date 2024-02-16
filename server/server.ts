import express, { Application, Request, Response } from 'express';
import { router } from './routes';

const logger = console;

function startServer() {
  
  // Check for required environment variables
  if (!process.env.NODE_ENV || !process.env.PORT) {
    logger.error('ENV variables are missing. Verify that you have set them directly or in a .env file.');
    process.exit(1);
  } else {
    logger.log('Using ENV variables');
  }

  // Initialize Express application
  const app: Application = express();

  // Configuration
  const port: number = parseInt(process.env.PORT || '7070', 10);
  const www:string = process.env.WWW || './';

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(www));

  // Logging `serving` directory
  logger.log(`Serving ${www}`);

  // Routes
  app.use('/api', router);

  // Default route
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile('index.html', { root: www });
  });

  // Start server
  app.listen(port, () => logger.log(`listening on http://localhost:${port}`));
}

export { startServer };
