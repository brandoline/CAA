document.addEventListener("DOMContentLoaded", function(){

    window.speechSynthesis.onvoiceschanged = () => {
        const vozes = window.speechSynthesis.getVoices();
        let vozEscolhida;

        for(i = 0; i < vozes.length; i++){
            if(vozes[i].lang === "pt-BR"){
                vozEscolhida = vozes[i];
                break;
            }
        }
        console.log(vozEscolhida);

        // Pessoas
        function fala(texto){
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(fala);
        }

        // PESSOAS
        const imagemEu = document.getElementById("eu").alt;
        document.getElementById("eu").addEventListener("click", () => fala(imagemEu));
    
        const imagemVoce = document.getElementById("voce").alt;
        document.getElementById("voce").addEventListener("click", () => fala(imagemVoce));
    
        const imagemEle = document.getElementById("ele").alt;
        document.getElementById("ele").addEventListener("click", () => fala(imagemEle));


        // OPNIOES
        const imagemSim = document.getElementById("sim").alt;
        document.getElementById("sim").addEventListener("click",  () => fala(imagemSim));

        const imagemNao = document.getElementById("nao").alt;
        document.getElementById("nao").addEventListener("click", () => fala(imagemNao));

        const imagemMais = document.getElementById("mais").alt;
        document.getElementById("mais").addEventListener("click", () => fala(imagemMais));

        const imagemDa = document.getElementById("da").alt;
        document.getElementById("da").addEventListener("click", () => fala(imagemDa));

        const imagemEsperar = document.getElementById("esperar").alt;
        document.getElementById("esperar").addEventListener("click", () => fala(imagemEsperar));

        const imagemQuero = document.getElementById("quero").alt;
        document.getElementById("quero").addEventListener("click", () => fala(imagemQuero));

        const imagemPegar = document.getElementById("pegar").alt;
        document.getElementById("pegar").addEventListener("click", () => fala(imagemPegar));

        const imagemColocar = document.getElementById("colocar").alt;
        document.getElementById("colocar").addEventListener("click", () => fala(imagemColocar));

        const imagemAjuda = document.getElementById("ajuda").alt;
        document.getElementById("ajuda").addEventListener("click", () => fala(imagemAjuda));
        
        const imagemAcabou = document.getElementById("acabou").alt;
        document.getElementById("acabou").addEventListener("click", () => fala(imagemAcabou));

        // ACOES
        const imagemdormir = document.getElementById("dormir").alt;
        document.getElementById("dormir").addEventListener("click", () => fala(imagemdormir));

        const imagemBrincar = document.getElementById("brincar").alt;
        document.getElementById("brincar").addEventListener("click", () => fala(imagemBrincar));

        const imagemSentar = document.getElementById("sentar").alt;
        document.getElementById("sentar").addEventListener("click", () => fala(imagemSentar));

        const imagemGuardar = document.getElementById("guardar").alt;
        document.getElementById("guardar").addEventListener("click", () => fala(imagemGuardar));

        const imagemTrocar = document.getElementById("trocar").alt;
        document.getElementById("trocar").addEventListener("click", () => fala(imagemTrocar));

        const imagemIr = document.getElementById("ir").alt;
        document.getElementById("ir").addEventListener("click", () => fala(imagemIr));

        const imagemSentimentos = document.getElementById("sentimentos").alt;
        document.getElementById("sentimentos").addEventListener("click", () => fala(imagemSentimentos));

        const imagemPessoas = document.getElementById("pessoas").alt;
        document.getElementById("pessoas").addEventListener("click", () => fala(imagemPessoas));
    };
});