import { Provider } from 'react-redux';

import { FlowCanvas } from './components';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <FlowCanvas />
      </div>
    </Provider>
  );
}

export default App;
