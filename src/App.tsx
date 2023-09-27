import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

function App() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        paddingBottom: '40px',
        paddingRight: '20px',
      }}
    >
      <Tldraw />
    </div>
  );
}

export default App;
