import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom/client';
import React from 'react';
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import { App } from './app.jsx';


const root = ReactDom.createRoot (document.getElementById('root'));





root.render(
  
  <App/>

);
