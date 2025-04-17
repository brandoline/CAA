document.addEventListener("DOMContentLoaded", function(){
    
    // Sentimentos
    document.getElementById("feliz").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("feliz");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = window.speechSynthesis.getVoices()[0]
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("triste").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("triste");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = window.speechSynthesis.getVoices()[0]
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("raiva").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("raiva");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = window.speechSynthesis.getVoices()[0]
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("medo").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("medo");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = window.speechSynthesis.getVoices()[0]
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("nojo").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("nojo");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = window.speechSynthesis.getVoices()[0]
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })
});