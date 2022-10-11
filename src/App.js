import { GridPage } from './grid';
import { COLUMN, GRID } from './utils/constants';

function App() {
  const variant = GRID;
  return (
    <GridPage variant={variant} />
  );
}

export default App;
