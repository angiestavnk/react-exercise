import { StyleContextProvider } from './context/StyleConext';
import { GridPage } from './grid';
import { COLUMN, GRID } from './utils/constants';

function App() {
  const variant = GRID;

  return (
    <StyleContextProvider>
      <GridPage variant={variant} />
    </StyleContextProvider>
  );
}

export default App;
