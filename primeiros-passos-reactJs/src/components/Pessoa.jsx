function Pessoa({nome, idade, profissao, foto}){

    return(
        <div>
            <img class = "MinhaFoto" src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade} anos</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}
    export default Pessoa