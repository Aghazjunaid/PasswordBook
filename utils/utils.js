module.exports = () => {

    function passwordGenerator(){
        const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const specialCharacter = "~!@#$%^&*()-+?</>"
        if(uppercaseAlphabetIsActive){
            let text = uppercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(lowercaseAlphabetIsActive){
            let text = lowercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(specialCharacterIsActive){
            let text = specialCharacter+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(uppercaseAlphabetIsActive && lowercaseAlphabetIsActive){
            let text = uppercaseAlphabet+lowercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(uppercaseAlphabetIsActive && specialCharacterIsActive){
            let text = uppercaseAlphabet+specialCharacter+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(specialCharacterIsActive && lowercaseAlphabetIsActive){
            let text = specialCharacter+lowercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(uppercaseAlphabetIsActive && lowercaseAlphabetIsActive && specialCharacterIsActive){
            let text = uppercaseAlphabet+lowercaseAlphabet+specialCharacter+number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else {
            let text = number;        
            let result = '';
            for (let i = 0; i < n; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;    
        }
    }








    return {
        passwordGenerator
    }
}