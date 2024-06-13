let h1 = document.createElement("h1")
h1.innerText = "Welcome to dom day 2"
document.boby.appendChild(h1)

let page:

function openTab(){
    page = window.open('sample.html',"blank","width=789","height=786")  
}
function closeTab(){
    page.close()   
} 

function confirmSubmission(){
    let response =confirm ("are you sure want to submission")
    if (response)
        {
            window.open("https://www.facebook.com")
        }
        else
        {
            let age = window.prompt("Enter your age")
            console.log(age)
        }
}



//let page;
//function openTab(){
    //page = window.open('https://www.google.com',"blank","width=789","height=786")
    //page.document.write("<h2>I am the opened tab<h2>")
//}
//function closeTab(){
   // page.close()

//}
//function comfirmSubmission(){
   // let response =confirm("are you sure want to submission")
    //if (response)
       // window.open("https://www.facebook.com")
//}



//function createAdd(){
    //let div = document.createElement("div")
    //div.setAttribute('id','offer')
    //div.innerHTML = '<h1>offer now harryup! Coupon:FREE237</h1>'
    //document.body.appendChild(div)
//}
//setTimeout(()=>{
    createAdd()
//},5000)

//setTimeout(()=>{
    //let div = document.getElementById('offer')
    //div.remove()
//},10000)


//let count = 0
//let h = 0
//let m = 10
//let s = 10

//setInterval(()=>{
   // s--
    //if(s===0)
        //{
           // m--
            //s=59
        //}
        //let timer = document.getElementById('timer')
        //timer.innerHTML = 'offer ends in 00<sub>HH</sub> : s{m}<sub>MM</sub> ' 
//})


