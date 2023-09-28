import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

function App() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
      }}
    >
      <Tldraw />
    </div>
  );
}
// paddingBottom: '40px',
//         paddingRight: '20px',
export default App;
