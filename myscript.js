const imageData = {
    web: ["images/project/web/web1.jpg","images/project/web/web2.jpg","images/project/web/web3.jpg","images/project/web/web4.png","images/project/web/web5.png"],
    desgin:["images/project/desgin/desgin1.webp","images/project/desgin/desgin2.webp","images/project/desgin/desgin3.webp",],
    mobile: ["images/project/mobile/mobile1.webp","images/project/mobile/mobile2.png","images/project/mobile/mobile3.webp","images/project/mobile/mobile4.webp","images/project/mobile/mobile5.png","images/project/mobile/mobile6.webp",],
    saas:["images/project/saas/saas4.png","images/project/saas/saas2.jpg","images/project/saas/saas3.png","images/project/saas/saas5.png","images/project/saas/saas7.png","images/project/saas/saas6.png",],
    agent:["images/project/agent.png"],
    chatbot:["images/project/chatbot/chatbot1.gif","images/project/chatbot/chatbot2.gif","images/project/chatbot/chatbot3.gif","images/project/chatbot/chatbot4.gif","images/project/chatbot/chatbot5.gif","images/project/chatbot/chatbot6.gif",],
   }

   const container = document.getElementById('mywork-container');
   //container.innerHTML = '';
   function loadMoreImages(type) {
      if(type == "web"){
        container.innerHTML = '';
        imageData.web.forEach(imgSrc => {
          const newImage = document.createElement('img');
          newImage.src = imgSrc;
          newImage.alt = '';  // Add alt text if needed
          container.appendChild(newImage);
        });
      }
      else if (type == "mobile"){
        container.innerHTML = '';
        imageData.mobile.forEach(imgSrc => {
          const newImage = document.createElement('img');
          newImage.src = imgSrc;
          newImage.alt = '';  // Add alt text if needed
          container.appendChild(newImage);
        });
      }
      else if (type == "chatBot"){
        container.innerHTML = '';
        imageData.chatbot.forEach(imgSrc => {
          const newImage = document.createElement('img');
          newImage.src = imgSrc;
          newImage.alt = '';  // Add alt text if needed
          container.appendChild(newImage);
        });
      }
      else if (type == "desgin"){
        container.innerHTML = '';
        imageData.desgin.forEach(imgSrc => {
          const newImage = document.createElement('img');
          newImage.src = imgSrc;
          newImage.alt = '';  // Add alt text if needed
          container.appendChild(newImage);
        });
      }

      else if (type == "saas"){
        container.innerHTML = '';
        imageData.saas.forEach(imgSrc => {
          const newImage = document.createElement('img');
          newImage.src = imgSrc;
          newImage.alt = '';  // Add alt text if needed
          container.appendChild(newImage);
        });
      }


      else if (type == "agent"){
        container.innerHTML = '';
        imageData.agent.forEach(imgSrc => {
          const newImage = document.createElement('img');
          newImage.src = imgSrc;
          newImage.alt = '';  // Add alt text if needed
          container.appendChild(newImage);
        });
      }
   }