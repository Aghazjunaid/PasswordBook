module.exports = () => {

    function passwordGenerator(passwordLength,uppercaseAlphabetIsActive,lowercaseAlphabetIsActive,specialCharacterIsActive){
        const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const specialCharacter = "~!@#$%^&*()-+?</>"
        if(uppercaseAlphabetIsActive && !lowercaseAlphabetIsActive && !specialCharacterIsActive){
            let text = uppercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(lowercaseAlphabetIsActive && !specialCharacterIsActive && !uppercaseAlphabetIsActive){
            let text = lowercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(specialCharacterIsActive && !lowercaseAlphabetIsActive && !uppercaseAlphabetIsActive){
            let text = specialCharacter+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(uppercaseAlphabetIsActive && lowercaseAlphabetIsActive && !specialCharacterIsActive){
            let text = uppercaseAlphabet+lowercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(uppercaseAlphabetIsActive && specialCharacterIsActive && !lowercaseAlphabetIsActive){
            let text = uppercaseAlphabet+specialCharacter+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(specialCharacterIsActive && lowercaseAlphabetIsActive && !uppercaseAlphabetIsActive){
            let text = specialCharacter+lowercaseAlphabet+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else if(uppercaseAlphabetIsActive && lowercaseAlphabetIsActive && specialCharacterIsActive){
            let text = uppercaseAlphabet+lowercaseAlphabet+specialCharacter+number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;
        } else {
            let text = number;        
            let result = '';
            for (let i = 0; i < passwordLength; i++) result += text[Math.round(Math.random() * (text.length - 1))];
            return result;    
        }
    }





    return {
        passwordGenerator
    }
}