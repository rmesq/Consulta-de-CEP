
async function consultarCep(CEP) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }

        const data = await response.json();
        if (data.erro == true) {
            alert("CEP inválido!")
        } else {
            document.getElementById('txtRua').value = data.logradouro;
            document.getElementById('txtComplemento').value = data.complemento;
            document.getElementById('txtBairro').value = data.bairro;
            document.getElementById('txtCidade').value = data.localidade;
            document.getElementById('txtEstado').value = data.uf;
        }

        console.log(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}


