/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import Status from './Status'

render(() => <Status />, document.getElementById('root') as HTMLElement);
