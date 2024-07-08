/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    
    let final = ''
    let n = s.length
    for(let i = 0; i<n; i++){
        final += s.charAt([(i + k) % n ])
    }
    return final
};