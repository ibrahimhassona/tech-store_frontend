const deleteDataApi = (id:number)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA0Mzk4MTAzLCJleHAiOjE3MDY5OTAxMDN9.pTCE4IpDWpDHmlOmR7p91iZB7eP85FidBnuwyEJWizs");
    
    var raw = JSON.stringify({
      "data": {
        "id": 1,
        "attributes": {},
        "meta": {}
      },
      "meta": {}
    });
    
    var requestOptions:any = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:1337/api/carts/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

export default deleteDataApi