import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from "./store";

// StateProvider提供了全局的数据，维护数据处理的逻辑；而App是界面UI内容，使用数据绘制内容。
ReactDOM.render(
  <StateProvider>
      <App/>
  </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
