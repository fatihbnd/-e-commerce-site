import './App.css'
import Banners from './components/Banners/Banners'
import Header from './components/Header/Header'
import TrendProduct from './components/Product/TrendProduct'
import Services from './components/Services/Services'

function App() {
  return (
    <>
      <Header></Header>
      <Banners></Banners>
      <Services></Services>
      <TrendProduct></TrendProduct>
    </>
  )
}

export default App
