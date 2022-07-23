import '../public/assets/css/plugins.css';
import '../public/assets/css/styles.css';
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { store } from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
