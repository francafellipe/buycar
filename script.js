const btnCadastrar = document.getElementById('btn-cadastrar-Produto');
const mainProdutos = document.getElementById('two');

async function cadastrarNovoProduto() {
    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify({
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        // Criar um novo elemento com as mesmas características da div
        const novoElemento = document.createElement('div');
        novoElemento.className = 'container text-center';
        novoElemento.id = 'novo-elemento'; // Defina um ID único para o novo elemento

        // Adicionar conteúdo ao novo elemento (pode ser semelhante ao conteúdo da div original)
        novoElemento.innerHTML = `
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col">
                    <div class="p-3">
                        <div class="card" style="width: 18rem;">
                            <img src="${data.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.description}.</p>
                                <a href="#" class="btn btn-primary">R$ ${data.price}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adicionar o novo elemento à main
        mainProdutos.appendChild(novoElemento);
    } catch (error) {
        console.error('Erro ao cadastrar o novo produto:', error);
    }
}

btnCadastrar.addEventListener('click', cadastrarNovoProduto);
