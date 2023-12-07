import React from 'react';
import { createRoot } from 'react-dom/client';
import { OtherWindow } from '../windows/OtherWindow';
import '../styles/index.css';

const root = createRoot(document.body);
root.render(<OtherWindow />);