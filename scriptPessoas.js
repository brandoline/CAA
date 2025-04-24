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
    document.getElementById("pessoas").addEventListener("click", () => {
        const imagem = document.getElementById("pessoas");
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

    document.getElementById("voce").addEventListener("click", () => {
        const imagem = document.getElementById("voce");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("mae").addEventListener("click", () => {
        const imagem = document.getElementById("mae");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("pai").addEventListener("click", () => {
        const imagem = document.getElementById("pai");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("irma").addEventListener("click", () => {
        const imagem = document.getElementById("irma");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("irmao").addEventListener("click", () => {
        const imagem = document.getElementById("irmao");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("vo").addEventListener("click", () => {
        const imagem = document.getElementById("vo");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("vovo").addEventListener("click", () => {
        const imagem = document.getElementById("vovo");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("tia").addEventListener("click", () => {
        const imagem = document.getElementById("tia");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("tio").addEventListener("click", () => {
        const imagem = document.getElementById("tio");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });
}
});