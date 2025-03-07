import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {
       const nome = 'Goku'
  
  return( 
    <div>
      <HelloWorld/>
      <SayMyName nome={nome}/>
      <Pessoa nome = "Vanderson" idade = "28" profissao = "Gerente Administrativo" foto = "https://img.elo7.com.br/product/zoom/40C3AF9/quadro-coragem-o-cao-covarde-cartoon-animacao-cachorro.jpg"/>
    </div>

  )
}
export default App
