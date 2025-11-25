// ==========================
// CARREGAR PUNIÇÕES PADRÃO
// ==========================

const defaultPunicoes = [
    {
        categoria: "Prisão Staff",
        infracao: "ÁUDIO ESTOURADO NA PRAÇA",
        punicao: "50 meses de prisão"
    },
    {
        categoria: "Prisão Staff",
        infracao: "USO INDEVIDO DO CALL ADM",
        punicao: "500 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "BAIT/COPBAIT",
        punicao: "Advertência 1 + 500 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "ABUSO DE PODER",
        punicao: "Advertência 1"
    },
    {
        categoria: "Tickets",
        infracao: "LOOT INDEVIDO",
        punicao: "Advertência Verbal"
    },
    {
        categoria: "Tickets",
        infracao: "REGRAS DE AÇÕES E PISTA",
        punicao: "Advertência Verbal + 300 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "COMBAT LOGGING",
        punicao: "Advertência + 2500 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "FLAMING",
        punicao: "Advertência 1"
    },
    {
        categoria: "Tickets",
        infracao: "VDM",
        punicao: "Advertência + 500 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "RDM",
        punicao: "Advertência + 1000 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "ZARALHO / ANTI-RP",
        punicao: "Advertência + 3000 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "POWER GAMING",
        punicao: "Advertência Verbal"
    },
    {
        categoria: "Tickets",
        infracao: "META GAMING",
        punicao: "Dupla advertência + 1000 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "QUEBRA DE IMERSÃO",
        punicao: "100 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "LEMBRAR DE AÇÃO",
        punicao: "100 meses de prisão"
    },
    {
        categoria: "Tickets",
        infracao: "MAL USO DO CHAT",
        punicao: "50 meses de prisão ou Advertência Verbal"
    },
    {
        categoria: "Tickets",
        infracao: "SAFE ZONE",
        punicao: "Advertência Verbal + 100 meses de prisão"
    }
];

// Se não existir lista salva, cria a padrão
if (!localStorage.getItem("punicoes")) {
    localStorage.setItem("punicoes", JSON.stringify(defaultPunicoes));
}

let punicoes = JSON.parse(localStorage.getItem("punicoes"));
