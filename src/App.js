import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Niezła apka</p>
      <p>Trzeba ją przetestować!</p>
      <MainStyle>
        <p>Ciekawe</p>
      </MainStyle>
    </div>
  );
}

export default App;

const MainStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 25px;
  font-weight: 700;
`