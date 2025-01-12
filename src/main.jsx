import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import ConuterReducer from './components/ProjectFive/Redux/Reducer';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';

const store = createStore(ConuterReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider> 
);
