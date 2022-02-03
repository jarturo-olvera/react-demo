import './App.css';
import DashboardItem from './components/DashboardItem'; 


function App() {
  return (
    <DashboardItem
      title = 'Mis Clientes'
      onSearch = {
        () => {
          console.log('0');
        }
      }
    />
  );
}

export default App;
