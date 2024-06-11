document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('procurar');
    const resultsContainer = document.getElementById('resultado');

    const items = [
        { name: "vinhos", url: "vinhos.html" },
        { name: "vodkas", url: "vodkas.html" },
        { name: "cervejas", url: "cervejas.html" },
    ];


    

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        resultsContainer.innerHTML = '';
        
        if (query) {
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
            
            filteredItems.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('itemresultado');
                div.textContent = item.name;
                div.dataset.url = item.url;
                resultsContainer.appendChild(div);
            });

            resultsContainer.style.display = filteredItems.length ? 'block' : 'none';
        } else {
            resultsContainer.style.display = 'none';
        }
    });




    resultsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('itemresultado')) {
            const url = e.target.dataset.url;
            window.location.href = url;
        }
    });



    
    searchInput.addEventListener('focus', function() {
        if (resultsContainer.children.length > 0) {
            resultsContainer.style.display = 'block';
        }
    });




   
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
            resultsContainer.style.display = 'none';
        }
    });
});







function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  // Função para fechar o modal
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  // Fechar o modal se clicar fora do conteúdo
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }







