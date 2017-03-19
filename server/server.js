import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';


import React from 'react';
import Helmet from 'react-helmet';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Routes } from '.././client/routes';
import { serverRender } from './serverRender'

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

//Passport dependencies 
import passport from 'passport';
//import 'config/passport.js';

//routes
import router from './api/routes/index';
import medicationRouter from './api/routes/medications';
import userRouter from './api/routes/users';

// Initialize the Express App
const app = new Express();



// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, historyApiFallback:true }));
  app.use(webpackHotMiddleware(compiler));
}



// Import required modules

import { fetchComponentData } from './util/fetchData';
import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData();
});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist')));
app.use('/api', posts);



app.use(serverRender)

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
