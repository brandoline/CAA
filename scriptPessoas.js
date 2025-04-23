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
    document.getElementById("pessoas").addEventListener("click", function falar() {
        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance("pessoas");
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

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

    document.getElementById("mae").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("mae");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("pai").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("pai");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("irma").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("irma");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("irmao").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("irmao");
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

    document.getElementById("vo").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("vo");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("vovo").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("vovo");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("tia").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("tia");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("tio").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("tio");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })
}
});