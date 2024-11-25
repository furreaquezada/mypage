import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom/client';
import React from 'react';
import {App} from './App.jsx';
import './index.css';

const root = ReactDom.createRoot (document.getElementById('root'));





root.render(
  
  <App />

);
