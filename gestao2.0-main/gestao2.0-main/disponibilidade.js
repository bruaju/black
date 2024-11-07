function verDetalhes(leitoId) {
    const leito = leitosDisponiveis.find(l => l.numero === leitoId);
    if (!leito) return alert("Leito não encontrado!");

    const confirmar = confirm("Deseja marcar este leito como Ocupado ou Pendente?");
    if (confirmar) {
        const opcao = prompt("Digite '1' para Ocupado ou '2' para Pendente:");
        if (opcao === '1') {
            marcarComoOcupado(leitoId);
        } else if (opcao === '2') {
            marcarComoPendente(leitoId);
        } else {
            alert("Opção inválida.");
        }
    }
}

function marcarComoOcupado(leitoId) {
    const leitoIndex = leitosDisponiveis.findIndex(l => l.numero === leitoId);
    if (leitoIndex !== -1) {
        const leito = leitosDisponiveis.splice(leitoIndex, 1)[0];
        leito.ocupadoDesde = new Date().toLocaleString('pt-BR');
        leitosOcupados.push(leito);
        atualizarLocalStorage();
        alert("Leito marcado como Ocupado.");
    }
}

function marcarComoPendente(leitoId) {
    const leitoIndex = leitosDisponiveis.findIndex(l => l.numero === leitoId);
    if (leitoIndex !== -1) {
        const leito = leitosDisponiveis.splice(leitoIndex, 1)[0];
        leito.pendenteDesde = new Date().toLocaleString('pt-BR');
        leitosPendentes.push(leito);
        atualizarLocalStorage();
        alert("Leito marcado como Pendente.");
    }
}

function atualizarLocalStorage() {
    localStorage.setItem('leitosDisponiveis', JSON.stringify(leitosDisponiveis));
    localStorage.setItem('leitosOcupados', JSON.stringify(leitosOcupados));
    localStorage.setItem('leitosPendentes', JSON.stringify(leitosPendentes));
}
