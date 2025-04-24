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
        document.getElementById("eu").addEventListener("click", () => {
            const imagem = document.getElementById("eu");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("voce").addEventListener("click", () => {
            const imagem = document.getElementById("voce");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("ele").addEventListener("click", () => {
            const imagem = document.getElementById("ele");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        // Opniao
        document.getElementById("sim").addEventListener("click", () => {
            const imagem = document.getElementById("sim");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("nao").addEventListener("click", () => {
            const imagem = document.getElementById("nao");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("mais").addEventListener("click", () => {
            const imagem = document.getElementById("mais");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("da").addEventListener("click", () => {
            const imagem = document.getElementById("da");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("esperar").addEventListener("click", () => {
            const imagem = document.getElementById("esperar");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("quero").addEventListener("click", () => {
            const imagem = document.getElementById("quero");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("pegar").addEventListener("click", () => {
            const imagem = document.getElementById("pegar");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("colocar").addEventListener("click", () => {
            const imagem = document.getElementById("colocar");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("ajuda").addEventListener("click", () => {
            const imagem = document.getElementById("ajuda");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("acabou").addEventListener("click", () => {
            const imagem = document.getElementById("acabou");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        // Acoes
        document.getElementById("comer").addEventListener("click", () => {
            const imagem = document.getElementById("comer");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("dormir").addEventListener("click", () => {
            const imagem = document.getElementById("dormir");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("eu").addEventListener("click", () => {
            const imagem = document.getElementById("eu");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("sentar").addEventListener("click", () => {
            const imagem = document.getElementById("sentar");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("guardar").addEventListener("click", () => {
            const imagem = document.getElementById("guardar");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("trocar").addEventListener("click", () => {
            const imagem = document.getElementById("trocar");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

        document.getElementById("ir").addEventListener("click", () => {
            const imagem = document.getElementById("ir");
            const texto = imagem.alt;
        
            const fala = new SpeechSynthesisUtterance(texto);
            fala.voice = vozEscolhida;
        
            window.speechSynthesis.speak(fala);
        });

    // linha de viagem
    document.getElementById("sentimentos").addEventListener("click", () => {
        const imagem = document.getElementById("sentimentos");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("pessoas").addEventListener("click", () => {
        const imagem = document.getElementById("pessoas");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });
}; 
});