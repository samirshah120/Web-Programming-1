module.exports = {
   async checkPalindrome(texttotest){
        texttotest = texttotest.toLowerCase()
        texttotest = texttotest.replace(/[^a-zA-Z0-9]/g, "")
        texttotest = texttotest.replace(/\s/g,'')
        if(texttotest.length === 0)
            return false
        let reversestring = texttotest.split("").reverse().join("")
        if(texttotest === reversestring)
            return true
        else
            return false
    }
}

