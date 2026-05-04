import Controller from './Controller';
import Collapsible from './Collapsible';

const container = document.querySelector('.container');
const collapsible = new Collapsible(container);

const controller = new Controller(collapsible);
controller.init();
