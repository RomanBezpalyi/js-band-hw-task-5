import './sass/main.scss';
import Model from './js/Model';
import View from './js/View';
import Controller from './js/Controller';

const view = new View();
const model = new Model();

new Controller(model, view);
