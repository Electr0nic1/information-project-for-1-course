
function encrypt() {
    var message = document.getElementById("message").value;
    var encryptedMessage = a1z26Encrypt(message);
    document.getElementById("result").textContent = encryptedMessage;
  }
  
  function decrypt() {
    var encryptedMessage = document.getElementById("result").textContent;
    var decryptedMessage = a1z26Decrypt(encryptedMessage);
    document.getElementById("message").value = decryptedMessage;
  }
  
  function a1z26Encrypt(message) {
    var encryptedMessage = "";
  
    for (var i = 0; i < message.length; i++) {
      var char = message[i].toLowerCase();
      var charCode = char.charCodeAt(0);
  
      if (isRussianLetter(char)) {
        encryptedMessage += (charCode - 1071) + " "; 
      } else {
        encryptedMessage += char; 
      }
    }
  
    return encryptedMessage.trim();
  }
  
  function a1z26Decrypt(encryptedMessage) {
    var decryptedMessage = "";
    var numbers = encryptedMessage.split(" ");
  
    for (var i = 0; i < numbers.length; i++) {
      var number = parseInt(numbers[i]);
  
      if (number >= 1 && number <= 33) {
        var charCode = number + 1071;
        var char = String.fromCharCode(charCode);
        decryptedMessage += char;
      } else {
        decryptedMessage += numbers[i]; 
      }
    }
  
    return decryptedMessage;
  }
  
  function isRussianLetter(char) {
    return /^[а-яА-Я]+$/.test(char);
  }