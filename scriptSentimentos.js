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

    // Sentimentos
    document.getElementById("sentimentos").addEventListener("click", function falar() {
        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance("sentimentos");
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })
        
    document.getElementById("feliz").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("feliz");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("triste").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("triste");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("raiva").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("raiva");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("medo").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("medo");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })

    document.getElementById("nojo").addEventListener("click", function falar() {
        
        let imagem = document.getElementById("nojo");
        let alt = imagem.alt;

        // Speech to text
        const vozGoogle = vozEscolhida;
        const config_Fala = new SpeechSynthesisUtterance(alt);
        config_Fala.voice = vozGoogle;
        window.speechSynthesis.speak(config_Fala);
    })
}
});
