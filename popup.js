// Default values
const defaultLength = 12
const defaultPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

// Main script body
document.querySelector('#generate').addEventListener('click', function() {
    let passwordLength = document.querySelector('#length').value
    const includeLetters = document.querySelector('#letters').checked
    const includeDigits = document.querySelector('#digits').checked
    const includeSymbols = document.querySelector('#symbols').checked

    let password = ''
    let characterPool = ''

    // Configures character pool in accordance with selected parameters
    if (includeLetters) {
        characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    }
    if (includeDigits) {
        characterPool += '0123456789'
    }
    if (includeSymbols) {
        characterPool += '!@#$%^&*()[]'
    }

    // Assigns default values for parameters if input fields are empty
    if (!passwordLength) {
        passwordLength = defaultLength
    }
    if (!characterPool) {
        characterPool = defaultPool
    }
    
    // Loop for appending random character to password from character pool
    for (let i = 0; i < passwordLength; i++) {
       password += chance.character({pool: characterPool}) 
    }

    document.querySelector('#generated-password').value = password
})

document.querySelector("#copy").addEventListener('click', function() {
    const copiedPassword = document.querySelector('#generated-password')
    copiedPassword.select()
    document.execCommand('copy')
})