const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois que você se ausenta da escola, varias pessoas diz que a um site que pode responder suas perguntas em segundos",
        alternativas: [
            {
                texto: "Isso é impresionate",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "No incio fique com duvida sobre esse site!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Após a professora ver como que e a tecnologia ia, ela decide, fazer com os alunos um trablho sobre a ia",
        alternativas: [
            {
                texto: "Utilizar a tecnologia para ver como funciona e ver como é.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escrever um texto com vossa palavra e com palvras dos cologas",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Ao ver como que funcionava a ia, decidem fazer um debate entre si pra ver como as pessoas acharam que seria a ia daqui uns anos pra frente ",
        alternativas: [
            {
                texto: "A ia podia ser boa para sociedade, mas ela so fosse utilizada quando menos precisar pra nao estragar as pessoas e suas ideia ",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: " A ia é boa e deveria ser utilizada direta pelas pessoas, por que mudaria a sociedade ",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Logo apos o debate, decide fazerem uma imagen do modo antes da ia e depois da ia",
        alternativas: [
            {
                texto: "Fazer uma imagem usando apps antes do ia ",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Fazer uma imagm com a ia.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Ao longo do tempo decidem fazer uma atividade em grupos e deicdem usar a nova função IA e a forma manoescrita ",
        alternativas: [
            {
                texto: "Escrever manoescrito e utilizar umas partes da IA ",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Utilizar a função IA e fazer o trablho inteiro e nao fazer mudanças",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2060...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Oque seria se a IA fosse criada no ano de 1980?";
}

mostraPergunta();
