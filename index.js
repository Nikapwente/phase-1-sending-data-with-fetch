// Add your code here


function submitData(userName,userEmail) {
return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: `${userName}`,
        email: `${userEmail}`,
    }),
    })
    .then(response => response.json())
    .then(data => {
        let header = document.getElementById("header");
        document = data.id; 
        header.textContent = data.id; 
        
    })
    .catch(error => {
        alert("Bad things! Ragnarők!");
        let header = document.getElementById("header");
        document = error.message;
        header.textContent = error.message;
        
    })
}
