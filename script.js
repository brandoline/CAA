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
        document.getElementById("eu").addEventListener("click", function falar() {
            
            let imagem = document.getElementById("eu");
            let alt = imagem.alt;
    
            // Speech to text
            const vozGoogle = vozEscolhida;
            const config_Fala = new SpeechSynthesisUtterance(alt);
            config_Fala.voice = vozGoogle;
            window.speechSynthesis.speak(config_Fala);
        })

        document.getElementById("voce").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("voce");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("ele").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("ele");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        // Opniao
        document.getElementById("sim").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("sim");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("nao").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("nao");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("mais").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("mais");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("da").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("da");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("esperar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("esperar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("quero").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("quero");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("pegar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("pegar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("colocar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("colocar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("ajuda").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("ajuda");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("acabou").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("acabou");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        // Acoes
        document.getElementById("comer").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("comer");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("dormir").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("dormir");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("brincar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("brincar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("sentar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("sentar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("guardar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("guardar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("trocar").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("trocar");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("ir").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("ir");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    // linha de viagem
        document.getElementById("sentimentos").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("sentimentos");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

        document.getElementById("pessoas").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("pessoas");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })
}; 
});