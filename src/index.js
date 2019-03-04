import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/invie.css';
import './css/animations.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';


const initialState = {
	menu: [
		{
			href:'index.html',
			title: 'Home',
		},
		{
			href: '#guitarras',
			title: 'Guitarras',
		},
		{
			href: 'precios.html',
			title: 'Precios',
		},
	],
	logoPortada: logoPortada,
	guitarras: [
		{
			image: acustica,
			alt: 'Guitarra Invie Acustica',
			title: 'Invie Acustica',
			features: [
				'Estilo vintage',
				'Madera pura',
				'Incluye estuche invisible de aluminio',
			],
		},
		{
			image: classic,
			alt: 'Guitarra Invie Classic',
			title: 'Invie Acustica',
			features: [
				'Estilo vintage',
				'Liviana',
				'empieza tu carrera como rockstart',
			]
		}
	],
};
function reducer(state, action){
	switch(action.type) {
		case 'UPDATE_PROPS':{
			const newProps = action.payload.props
			return {...state, ...newProps}
		}
		default:
			return state

	}
}

const store = createStore(reducer, initialState);
const easter = {
	menu: [
		{
			href:'index.html',
			title: 'Home',
		},
	],

	guitarras: [
		{
			image: easterA,
			alt: 'Guitarra Padre de familia',
			title: 'Invie Familiar',
			features: [
				'Estilo vintage',
				'Madera pura',
				'Incluye estuche invisible de aluminio',
			]
		},
		{
			image: easterB,
			alt: 'Guitarra Anime ',
			title: 'Invie Otaku',
			features: [
				'Lista para copiar a los simpsons',
				'Aire ouro',
				'Chistes malos',
			]
		}
	]
}
cheet('i n v i e', ()=> {
	store.dispatch({
		type: 'UPDATE_PROPS',
		payload: {
			props: easter
		}
	});
	// console.log('Lo lograste, descubriste el easter egg');
});

cheet('g o b a c k', ()=> {
	store.dispatch({
		type: 'UPDATE_PROPS',
		payload: {
			props: initialState
		}
	});
	// console.log('Regresaste al estado inicial');
});


ReactDOM.render(
	<Provider store={store}>
		<Invie />
	</Provider>,
	document.getElementById('root'));
serviceWorker.unregister();
