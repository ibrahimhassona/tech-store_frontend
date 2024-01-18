const updateItem = (data:any,id:number) =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 04207846e0f4857c0e198faa34ab465629bef42403581b96076d0c7aa5ad432b7f5f54244fb2cc76e9eb41c79637b2f10f4934b98d4874559145ba861ad2c1be0adc4264f15762d986b6439febb2a05eecd910dd4c29cbb96dd6f49e8d6cebd79a63f794a8e075ca015bc86da6e723aa1082b8ad957f1a7e9596bbc99a488919");

var raw = JSON.stringify(data);

var requestOptions:any = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:1337/api/carts/${id}`,requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
export default updateItem;