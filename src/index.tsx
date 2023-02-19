/** @format */
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./i18n/config"
import {Provider} from "react-redux";
import store from "./store/store";
const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);