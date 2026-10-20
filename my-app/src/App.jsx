import Greeting from './Greeting';
import TaskList from './TaskList';
import ActionButton from './ActionButton';
import ProfileCard from './ProfileCard';
import ImageGallery from './ImageGallery';

const cardStyle = {
  border: '1px solid #2f2661',
  borderRadius: '8px',
  padding: '16px',
  margin: '12px 0',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  backgroundColor: '#182d74',
};

function App() {
  return (
    <div style={{
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#324150',
      minHeight: '100vh',
    }}>
      <h1 style={{ textAlign: 'center' }}>Мои React-компоненты</h1>

      <div style={cardStyle}><Greeting /></div>
      <div style={cardStyle}><TaskList /></div>
      <div style={cardStyle}><ActionButton /></div>
      <div style={cardStyle}><ProfileCard /></div>
      <div style={cardStyle}><ImageGallery /></div>
    </div>
  );
}

export default App;