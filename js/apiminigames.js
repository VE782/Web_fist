
fetch("https://gamertocoder.garena.co.th/api/minigames") 
.then((response) => {
  return response.json();
})
 .then ((data) => {
  if (typeof data == "number"){
      alert(data);
  } else 
   {for (let i = 0; i < data.length; i++){
      const currentData = data[i];
      const newListItem = document.createElement('div')
      newListItem.classList.add("border")
      const newModal = document.createElement("div")
      newModal.classList.add("modal")


      const html =  
      '<div class="flip-box">'
      +'<div class="flip-box-inner">'
      +'<div class="flip-box-front">'
      +'<img = src="'+ currentData.icon + '"width=200 height=200>'
      +'</div>'
      +'<div class="flip-box-back">'
      +'<h2 class="text-box">คลิกเพื่อดูเพิ่มเติม</h2>'
      +'</div>'+'</div>'+'</div>'
      +'<div class="modal" >'
      +'<div class="modal-content">'
      +'<img = class="logo" src="https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/bmg-logo/01.png">'
      +'<div class="pigfly">'
      +'<img = class="pig" src="/images/pig.png">'
      +'</div>'
      +'<h1 class="Fonthaed">'+ currentData.name +'</h1>'
      +'<p class="Font">'+ currentData.description +'</p>'
      +'</div>'
      +'</div>'
      html.trim();
      newListItem.innerHTML = html;
      document.getElementById("list").appendChild(newListItem)
      newListItem.querySelector("div.flip-box div.flip-box-inner div.flip-box-back").onclick = () => {
        newListItem.querySelector("div.modal").style.display = "block";
      newListItem.querySelector("div.modal").onclick = () => {
        newListItem.querySelector("div.modal").style.display = "none";
      };
    };
  }
}
backdrop.addEventListener('click', () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
});
})

        
