let ListaDados = [
  {
    account: "Mark Webber",
    ImageURL: "avatar-mark-webber.webp",
    time: "1m ago",
    action: "reacted to your recent post",
    actionTarget: "My first tournament today!",
    message: "",
    notificationStatus: "unread",
  },
  {
    account: "Angela Gray",
    ImageURL: "avatar-angela-gray.webp",
    time: "5m ago",
    action: "followed you",
    actionTarget: "",
    message: "",
    notificationStatus: "unread",
  },
  {
    account: "Jacob Thompson",
    ImageURL: "avatar-jacob-thompson.webp",
    time: "1 day ago",
    action: "has joined your group",
    actionTarget: "Chess Club",
    club: true,
    message: "",
    notificationStatus: "unread",
  },
  {
    account: "Rizky Hasanuddin",
    ImageURL: "avatar-rizky-hasanuddin.webp",
    time: "5 days ago",
    action: "sent you a private message",
    actionTarget: "",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    notificationStatus: "read",
  },
  {
    account: "Kimberly Smith",
    ImageURL: "avatar-kimberly-smith.webp",
    time: "1 week ago",
    action: "commented on your picture",
    actionTarget: "",
    actionImage: "image-chess.webp",
    message: "",
    notificationStatus: "read",
  },
  {
    account: "Nathan Peterson",
    ImageURL: "avatar-nathan-peterson.webp",
    time: "2 weeks ago",
    action: "reacted to your recent post",
    actionTarget: "5 end-game strategies to increase your win rate",
    message: "",
    notificationStatus: "read",
  },
  {
    account: "Anna Kim",
    ImageURL: "avatar-anna-kim.webp",
    time: "2 weeks ago",
    action: "left the group",
    actionTarget: "Chess Club",
    club: true,
    message: "",
    notificationStatus: "read",
  }
]

function mountActionImage(imagem)
{
  return ` 
  
    <img width="48px" src="assets/images/${imagem}">
  
  `
}

function createNotificationsFromData(ListaDados)
{
  let result = "";
  

  ListaDados.forEach(dados =>
  {
    let actionImage = dados.actionImage ? mountActionImage(dados.actionImage) : "";
    let group = dados.club ? "group" : ""; 

    let message = dados.message ? `<div class="comment"> ${dados.message} </div>` : ""
    result += `
        <div class="notification ${dados.notificationStatus}">
        <header>
          <div style="display: flex;"> 
            <picture>
              <img width="48px"  src="assets/images/${dados.ImageURL}" />
            </picture>
            <div class="action">
              <span class="name">${dados.account} </span>${dados.action} <span class="action ${group}">${dados.actionTarget}</span>
              
              <div class="time">
                ${dados.time}
              </div>
            </div>
          </div>
          <picture">
            ${actionImage}
          </picture>
        </header>
        
        ${message}
        
      </div>
        `
  })

  return result;
}


document.querySelector("#notifications").innerHTML += createNotificationsFromData(ListaDados);
