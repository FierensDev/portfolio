import './App.css';

type CardProps = {
  str: string
}

const Card = ({ str }: CardProps) => {
  return (
    <div>
      <h1>{str}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>PORTFOLIO</h1>

      <Card str='salut' />
    </div>
  );
}

export default App;
