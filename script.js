let trofeus = [
    {
        name: "Quantos são???",
        descricao: "Encontre todos os idolos de Gildevandes",
        img: "quantos_sao.jpg"
    }
]

for(i = 0; i < trofeus.length; i++){
    let main = document.querySelector("#main");
    let box = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let titulo = document.createElement("p");
    let descricao = document.createElement("p");

    //criação da exibição do trofeu
    box.className = "box";
    img.src = `./assets/${trofeus[i].img}`;
    img.className = "img"
    box.appendChild(img)
    
    titulo.innerText = trofeus[i].name;
    descricao.innerText = trofeus[i].descricao;
    
    titulo.className = "titulo";
    descricao.className = "descricao";

    div.appendChild(titulo);
    div.appendChild(descricao)

    box.appendChild(div);

    //adiciona o trofeu a pagina
    main.appendChild(box);
}