import { Collection } from "./components/Collection";
import { Header } from "./components/Header"; 
import { Footer } from "./components/Footer";
import { Brand } from "./components/Brand";

function App() {
  return (
    <div>
     
     <body>
    <header className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <h1 className="navbar-brand">DAW Loja</h1>
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div className="container">
            <div className="carousel">
                <div className="carousel-item">
                    <div className="carousel-caption">
                        <h5>Coleção</h5>
                        <h4>Feminina <span>2021</span></h4>
                        <p>Um texto aqui para falar um pouco sobre a coleção Feminina 2021</p>
                        <button>Conheça nossa coleção</button>
                    </div>
                </div>
            </div>
            <div className="collection">
                <div className="card">
                    <img src="assets/images/collection1.jpg" />
                    <div className="card-body">
                        <h5>Coleção</h5>
                        <h4>Feminina</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/images/collection2.jpg" />
                    <div className="card-body">
                        <h5>Coleção</h5>
                        <h4>Feminina</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/images/collection3.jpg" />
                    <div className="card-body">
                        <h5>Coleção</h5>
                        <h4>Feminina</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/images/collection4.jpg" />
                    <div className="card-body">
                        <h5>Coleção</h5>
                        <h4>Feminina</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="card">
                    <img src="assets/images/product1.jpg" />
                    <div className="card-body">
                        <h5>Conjunto de casaco e calça preta</h5>
                        <div className="details">
                            <div className="star-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="price">
                                <h3>R$600,00</h3>
                                <p>10 x R$ 60,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/images/product2.jpg" />
                    <div className="card-body">
                        <h5>Conjunto de casaco e calça preta</h5>
                        <div className="details">
                            <div className="star-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="price">
                                <h3>R$600,00</h3>
                                <p>10 x R$ 60,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/images/product3.jpg" />
                    <div className="card-body">
                        <h5>Conjunto de casaco e calça preta</h5>
                        <div className="details">
                            <div className="star-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="price">
                                <h3>R$600,00</h3>
                                <p>10 x R$ 60,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <div className="newsletter">
        <div className="container">
            <h2>Newsletter</h2>
            <p className="fw-light">Assine nossa Newsletter para receber atualizações sobre ofertas especiais, novos produtos ou informações
                de descontos</p>
            <form>
                <input type="text" className="form-control form-control-lg" placeholder="Informe o seu e-mail" />
                <button className="btn btn-primary btn-lg ">Inscreva-se</button>
            </form>
        </div>
    </div>

    <div className="container">

    <Brand />

        


    </div>

    <footer>
        <div className="container row">
            <div className="col">
                <h5>Contato</h5>
                <ul>
                    <li>+55 46 99999-9999</li>
                    <li>Rua Mato Grosso, 200</li>
                    <li>Pato Branco, PR</li>
                </ul>
            </div>
            <div className="col">
                <h5>Institucional</h5>
                <ul>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Nossas lojas</a></li>
                    <li><a href="#">Trabalhe conosco</a></li>
                    <li><a href="#">Parceiros e fornecedores</a></li>
                </ul>
            </div>
            <div className="col">
                <h5>Atendimento</h5>
                <ul>
                    <li><a href="#">Atendimento</a></li>
                    <li><a href="#">Meus pedidos</a></li>
                    <li><a href="#">Devoluções</a></li>
                    <li><a href="#">Assistência técnica</a></li>
                    <li><a href="#">Política de privacidade</a></li>
                </ul>
            </div>
        </div>
    </footer>
</body>
    </div>
  );
}

export default App;

      
