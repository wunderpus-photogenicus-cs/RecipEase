/**
 Date: 8/3/2024
 Coauthors: Peter Larcheveque and Erin Lee
 Description: File to centralize routes for internal server
 */

const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

/**
 * handle parsing request body
 */
app.use(express.json());

/**
 * require routers
 */

/**
 * handle requests for static files
 */

/**
 * define route handlers
 */

/**
 * configure express global error handler
 */

/**
 * start server
 */

module.exports = app;