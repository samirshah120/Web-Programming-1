(function() {
  function checkPalindrome(textvalue){
        textvalue = textvalue.toLowerCase()
        textvalue = textvalue.replace(/[^a-zA-Z0-9]/g, "")
        textvalue = textvalue.replace(/\s/g,'')
        if(textvalue.length === 0)
            return false
        let reversestring = textvalue.split("").reverse().join("")
        if(textvalue === reversestring)
            return true
        else
            return false
  }
    const staticForm = document.getElementById("static-form");
    // console.log(staticForm)
    if (staticForm) {
      const text = document.getElementById("entertext")
      // console.log(text)
      staticForm.addEventListener("submit", event => {
        event.preventDefault();
        try {
          const textvalue = text.value;
          if(textvalue.length === 0)
            alert("Please enter text")
          else{
            let result = checkPalindrome(textvalue)
            // console.log(result)
            if(result === false){
              document.getElementById("attempts").innerHTML += '<li class="not-palindrome">' + textvalue + ' is Not Palindrome.' + '</li>'
            }
            else{
              document.getElementById("attempts").innerHTML += '<li class="is-palindrome">' + textvalue + ' is Palindrome.' + '</li>'
            } 
          }
          
        } catch (e) {
            console.log(e)
        }
      });
    }
  })();