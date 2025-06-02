function mostrarCampo() {
    const campoSection = document.getElementById('campo');
    campoSection.style.backgroundColor = '#a3b18c';
    campoSection.innerHTML = `
        <h2>Explorando o Campo</h2>
        <p>As plantações crescem, o sol brilha e o vento suave nos faz sentir a serenidade da natureza. Conecte-se com a tranquilidade do campo.</p>
        <button onclick="resetar()">Voltar</button>
    `;
}

function mostrarCidade() {
    const cidadeSection = document.getElementById('cidade');
    cidadeSection.style.backgroundColor = '#ffb84d';
    cidadeSection.innerHTML = `
        <h2>Explorando a Cidade</h2>
        <p>As ruas movimentadas, os edifícios modernos e a energia das pessoas nos lembram o poder da inovação e da tecnologia. A cidade está sempre em movimento.</p>
        <button onclick="resetar()">Voltar</button>
    `;
}

function resetar() {
    document.getElementById('campo').style.backgroundColor = '#fff';
    document.getElementById('campo').innerHTML = `
        <h2>O Campo</h2>
        <p>O campo representa a paz, o crescimento e as tradições que nos conectam com a natureza.</p>
        <button onclick="mostrarCampo()">Explore o Campo</button>
    `;

    document.getElementById('cidade').style.backgroundColor = '#fff';
    document.getElementById('cidade').innerHTML = `
        <h2>A Cidade</h2>
        <p>A cidade é a força dinâmica da modernidade, onde a tecnologia e as inovações florescem.</p>
        <button onclick="mostrarCidade()">Explore a Cidade</button>
    `;
}
