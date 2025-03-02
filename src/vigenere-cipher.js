const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
      this.direct = direct; // Determines if the machine is direct or reverse
  }

  encrypt(message, key) {
      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }
      return this.process(message, key, true);
  }

  decrypt(message, key) {
      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }
      return this.process(message, key, false);
  }

  process(message, key, encrypt = true) {
      const A = "A".charCodeAt(0);
      const Z = "Z".charCodeAt(0);
      const alphabetSize = 26;

      message = message.toUpperCase();
      key = key.toUpperCase();

      let result = [];
      let keyIndex = 0;

      for (let i = 0; i < message.length; i++) {
          const char = message[i];

          if (char >= 'A' && char <= 'Z') {
              const messageCharCode = char.charCodeAt(0) - A;
              const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - A;

              let newCharCode;
              if (encrypt) {
                  newCharCode = (messageCharCode + keyCharCode) % alphabetSize;
              } else {
                  newCharCode = (messageCharCode - keyCharCode + alphabetSize) % alphabetSize;
              }

              result.push(String.fromCharCode(A + newCharCode));
              keyIndex++;
          } else {
              result.push(char); // Keep non-alphabet characters unchanged
          }
      }

      if (!this.direct) {
          result.reverse();
      }

      return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
