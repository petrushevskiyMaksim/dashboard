import 'normalize.css';
import './style/style.css';
import { toggleAsideBar } from './js/aside';
import { activeButtonNav } from './js/nav';

toggleAsideBar();
activeButtonNav();

localStorage.setItem('monthlyData', JSON.stringify({}));

const dateNow = new Date();
const year = dateNow.getFullYear();
const month = dateNow.getMonth();

// console.log( `${year}-${month}`);
