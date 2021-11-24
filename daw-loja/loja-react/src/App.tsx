
import { Header } from './components/Header'
import { Newsletter } from './components/Newsletter'
import { Brand } from './components/Brand'
import { Collection } from './components/Collection'

import { Footer } from './components/Footer'
import { Product } from './components/Product'





function App() {
  const brands = [
    {alt: 'imagem1', source: './assets/images/brand1.png'},
    {alt: 'imagem2', source: './assets/images/brand2.png'},
    {alt: 'imagem3', source: './assets/images/brand3.png'},
    {alt: 'imagem4', source: './assets/images/brand4.png'},
    {alt: 'imagem5', source: './assets/images/brand5.png'}
  ]

  return (
    <div>
      <Header/>
      <main>
        <div className="container">
          <Collection/>
          <Product/>
        </div>

        <Newsletter/>

        <div className="container">
          <Brand items={brands}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}


export default App;