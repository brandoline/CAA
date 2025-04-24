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
    document.getElementById("sentimentos").addEventListener("click", () => {
        const imagem = document.getElementById("sentimentos");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("feliz").addEventListener("click", () => {
        const imagem = document.getElementById("feliz");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("triste").addEventListener("click", () => {
        const imagem = document.getElementById("triste");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("raiva").addEventListener("click", () => {
        const imagem = document.getElementById("raiva");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("medo").addEventListener("click", () => {
        const imagem = document.getElementById("medo");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });

    document.getElementById("nojo").addEventListener("click", () => {
        const imagem = document.getElementById("nojo");
        const texto = imagem.alt;
    
        const fala = new SpeechSynthesisUtterance(texto);
        fala.voice = vozEscolhida;
    
        window.speechSynthesis.speak(fala);
    });
}
});