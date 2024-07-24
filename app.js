//variables
document.getElementById("remove-quote");
document.getElementById("list-quotes");

document.getElementById("add-quote").addEventListener("click", addQuotes);{
    function addQuotes(){
        const fetchQuote=document.getElementById("quote").value;
        const fetchAuther=document.getElementById("auther").value;
        if(fetchAuther !== "" && fetchQuote !== ""){
            console.log(fetchQuote);
        
            const autherObject = document.createElement("li");
            const quoteObject = document.createElement("p")

        }
    } 
      
    

}