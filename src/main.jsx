import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const app = <img src='/logo.svg'></img>;

root.render(app);
