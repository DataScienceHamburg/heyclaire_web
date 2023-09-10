function clairebot() {
  const words = [
    "apple",
    "banana",
    "cat",
    "dog",
    "elephant",
    "forest",
    "guitar",
    "house",
    "island",
    "jungle",
    "kangaroo",
    "lion",
    "mountain",
    "ocean",
    "parrot",
    "quokka",
    "river",
    "sunflower",
    "tiger",
    "zebra"
  ];

  function generateSessionID() {
    // Number of words to include in the session ID
    const numberOfWords = 3; // You can adjust this number as needed
  
    // Initialize an array to store the selected words
    const selectedWords = [];
  
    // Randomly select words
    while (selectedWords.length < numberOfWords) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      
      // Ensure that the same word is not selected twice
      if (!selectedWords.includes(randomWord)) {
        selectedWords.push(randomWord);
      }
    }
    // Join the selected words to create the session ID
    const sessionID = selectedWords.join('_');
    return sessionID;
  }
  var session_id = generateSessionID();
  console.log(session_id);
  
  // get screen size
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var widthBreakpoint = 400;
  var iframeWidthInt = screenWidth < widthBreakpoint ? screenWidth : 300;
  var server_url = 'https://king-prawn-app-igyir.ondigitalocean.app';
  
  // Parameters passed to Chatbot
  const headerColor1 = document.getElementById("heyclaire").getAttribute("headerColor1");
  const headerColor2 = document.getElementById("heyclaire").getAttribute("headerColor2");
  const headlineText = document.getElementById("heyclaire").getAttribute("headlineText");
  const welcomeText = document.getElementById("heyclaire").getAttribute("welcomeText");
  const defaultAnswer = document.getElementById("heyclaire").getAttribute("defaultAnswer");
  const chatHint = document.getElementById("heyclaire").getAttribute("chatHint");
  const uid = document.getElementById("heyclaire").getAttribute("uid");
  const poweredbyVal = document.getElementById("heyclaire").getAttribute("poweredby");
  const position = document.getElementById("heyclaire").getAttribute("position");

  
  // Create the chatbot iframe element
  var iframe = document.createElement('iframe');
  // // Style the chatbot iframe using CSS
  iframe.style.position = 'fixed';
  iframe.style.bottom = screenWidth < widthBreakpoint ? '0px' : '20px';
  if (position == 'left') {
    iframe.style.left = screenWidth < widthBreakpoint ? '0px' : '20px';
  } else {
    iframe.style.right = screenWidth < widthBreakpoint ? '0px' : '20px';
  }
  iframe.style.width = iframeWidthInt + 'px';
  iframe.style.height = screenWidth < widthBreakpoint ? screenHeight + 'px' : '400px';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '10px';
  iframe.style.overflow = 'hidden';  // hide scrollbar
  
    

  // Append the chatbot iframe to the document body
  document.body.appendChild(iframe);

  // Access the iframe's document
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  var showChatbot = false;
  // Create the typing indicator element
  var typingIndicator = document.createElement('span');
  typingIndicator.className = 'typing-indicator';
  typingIndicator.textContent = '...';
  

  // Create the Main-Button
  var button = iframeDocument.createElement('button');
  button.textContent = '';
  button.className = 'my-button';
  button.id = 'myButton';
  button.style.display = 'absolute';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.width = '60px';
  button.style.height = '60px';
  button.style.border = 'solid';
  button.style.padding = '0px';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  if (position == 'left') {
    button.style.left = '20px';
  } else {
    button.style.right = '20px';
  }
  button.style.backgroundColor = '#' + headerColor1;
  button.style.color = 'white';
  button.style.borderWidth = '0px';

  button.style.borderRadius = '50%';
  button.style.borderColor = '#' + headerColor1;
  
  // button.style.padding = '10px';
  button.style.margin = '10px';

  var claireBase64 = 'data:image/png;base64,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';
  var imageChatbot = document.createElement('img');
  imageChatbot.alt = 'Chatbot Image';
  imageChatbot.style.width = '40px';
  imageChatbot.style.height = '40px';
  imageChatbot.style.margin = '10px';

  imageChatbot.src = claireBase64;

  var imageSend = document.createElement('img');
  imageSend.src = claireBase64;
  
  imageSend.alt = 'Button Image';
  imageSend.style.width = '60px';
  imageSend.style.height = '60px';
  imageSend.style.margin = '0px';
  imageSend.style.padding = '0px';
  imageSend.style.border = 'none';
  button.appendChild(imageSend);

  // Add click event listener to the button (click for show/hide chat)
  button.addEventListener('click', function() {
    toggleChatWindow();
    // hide the button when chatbot is opened

  });

  // Append the button to the document body
  document.body.appendChild(button);
  
  function insertLineBreaks(text, maxCharsPerLine) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
  
    for (const word of words) {
      if (word.length > maxCharsPerLine) {
        const wordChunks = [];
        let startIndex = 0;
  
        while (startIndex < word.length) {
          wordChunks.push(word.substr(startIndex, maxCharsPerLine));
          startIndex += maxCharsPerLine;
        }
  
        for (const chunk of wordChunks) {
          if ((currentLine + chunk).length <= maxCharsPerLine) {
            currentLine += chunk + ' ';
          } else {
            lines.push(currentLine.trim());
            currentLine = chunk + ' ';
          }
        }
      } else if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += word + ' ';
      } else {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      }
    }
  
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }
  
    return lines.join('<br>');
  }
  
function getChatbotAnswer(text, session_id, uid) {
  var apiUrl = `${server_url}/chatbot`;
  
  var chat_input_text = {'data': text, 'session_id': session_id, 'defaultAnswer': defaultAnswer,'uid': uid, 'apikey': '8055312a-e73d-4ca5-8395-c1ee02c01d60'};
  var chat_input_json = JSON.stringify(chat_input_text);

  var request = new XMLHttpRequest();
  request.open('POST', apiUrl, false);  // `false` makes the request synchronous
  request.setRequestHeader("Content-Type", "application/json");
  request.send(chat_input_json);

  if (request.status === 200) {
    return request.responseText;
  } else {
    throw new Error('Request failed with status ' + request.status);
  }
}

function toggleChatWindow() {
  if (showChatbot == true) {
    // hide the chatbot
    iframe.style.display = 'none';
    button.style.display = 'block';
    
  } else {
    // show the chatbot
    iframe.style.display = 'block';
    //  hide the button
    button.style.display = 'none';
    
    // Append the text element to the iframe's document body
    var iframeBody = iframe.contentDocument.body;
    iframeBody.style.overflowX = 'hidden'; // Hide horizontal scrollbar
    iframeBody.style.backgroundColor = 'white';
    iframe.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)'; // Add shadow effect    

    // Create the top area
    var top_area = document.createElement('div');
    top_area.style.content = '';
    top_area.style.color = 'white';
    top_area.style.display = 'flex';
    top_area.style.position = 'absolute';
    top_area.style.top = '0px';
    top_area.style.left = '0px';
    top_area.style.width = '100%';
    top_area.style.height = '50px';
    top_area.style.alignItems = 'center';
    top_area.style.backgroundColor = '#' + headerColor1;
    
    // Create a canvas element and set its dimensions
    var canvas = document.createElement('canvas');
    canvas.width = iframeWidthInt; // Adjust the width as needed
    canvas.height = 30; 
    canvas.style.display = 'block';
    canvas.style.position = 'absolute';
    // Set the canvas style to position it below the top_area div
    canvas.style.position = 'absolute';
    canvas.style.top = '50px'; // Position the canvas below the top_area
    canvas.style.left = '0px';

    // Append the canvas to the document body
    // document.body.appendChild(canvas);
    
    // Get the 2D rendering context of the canvas
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 10);

    // Control points for the quadratic Bézier curve
    const controlX = canvas.width / 4;
    const controlY = canvas.height / 0.75;

    // Ending point for the quadratic Bézier curve
    const endX = canvas.width;
    const endY = 0;

    ctx.quadraticCurveTo(controlX, controlY, endX, endY);

    
    ctx.fillStyle = '#' + headerColor1;
    ctx.fill();
    ctx.closePath();
    

    // Add text to the top area
    var textParagraph = document.createElement('p');
    textParagraph.style.display = 'flex';
    textParagraph.style.fontFamily = 'Arial, sans-serif';
    textParagraph.style.fontWeight = '10%';
    textParagraph.style.fontSize = '120%';
    textParagraph.style.justifyContent = 'center';
    textParagraph.style.width = '100%';
    textParagraph.style.marginRight = '40px';

    textParagraph.style.alignItems = 'center';
    textParagraph.textContent = headlineText;

    var closeButton = document.createElement('button');
    closeButton.style.display = 'flex';
    closeButton.style.fontFamily = 'Arial, sans-serif';
    closeButton.style.fontWeight = '10%';
    closeButton.style.fontSize = '120%';
    closeButton.style.justifyContent = 'center';
    closeButton.style.width = '10%';
    closeButton.style.marginRight = '10px';
    // closeButton.style.alignItems = 'center';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', function() {
      // hide the chatbot
      clearScrollableArea();
      showChatbot = true;
      toggleChatWindow();
      showChatbot = false;
    });

    // textParagraph.appendChild(text);
    top_area.appendChild(imageChatbot);
    top_area.appendChild(textParagraph);
    top_area.appendChild(closeButton);

    // create text input field
    var chat_input = document.createElement('input');
    chat_input.type = 'text';
    chat_input.style.border = 'none';
    chat_input.style.outline = '1px solid black';
    chat_input.style.alignItems = 'center';
    chat_input.style.borderRadius = '17.5px';
    
    chat_input.style.paddingLeft = '10px';
    chat_input.style.paddingRight = '10px';
    chat_input.placeholder = chatHint;
    chat_input.style.position = 'fixed';
    chat_input.style.fontFamily = 'Arial, sans-serif';
    chat_input.style.bottom = '10px';
    chat_input.style.left = '10px';
    chat_input.style.backgroundColor = 'white';
    chat_input.style.color = 'black';
  
    chat_input.style.border = 'none';
    chat_input.style.paddingTop = '0px';
    chat_input.style.margin = '10px';
    chat_input.style.width = '260px';
    chat_input.style.height = '35px';
    chat_input.style.borderWidth = '1px';

    var poweredBy = document.createElement('div');
    poweredBy.style.display = 'relative';
    poweredBy.style.fontSize = '75%';
    poweredBy.style.color = 'black';
    poweredBy.style.position = 'absolute';
    poweredBy.style.bottom = '50px';
    poweredBy.style.background = 'transparent';
    poweredBy.style.opacity = '0.5';
    poweredBy.style.fontFamily = 'Arial, sans-serif';
    // center text horizontally
    poweredBy.style.width = '100%';
    poweredBy.style.marginLeft = 'auto';
    poweredBy.style.textAlign = 'center';

    var poweredByText = document.createElement('p');
    poweredByText.textContent = poweredbyVal;    
    poweredBy.appendChild(poweredByText);
    
    
    // Create the scrollable area
    var scrollableArea = document.createElement('div');
    scrollableArea.style.top = '80px'; // Position below the top area
    scrollableArea.style.position = 'absolute';
    scrollableArea.style.height = 'calc(100% - 160px)';
    scrollableArea.style.width = '100%';
    scrollableArea.style.overflow = 'auto';
    scrollableArea.style.overflowX = 'hidden'; // Hide horizontal scrollbar
    
    // horizontal line
    var horizontalLine = document.createElement('hr');
    horizontalLine.style.position = 'absolute';
    horizontalLine.style.bottom = '70px';
    horizontalLine.style.left = '0px';
    horizontalLine.style.width = '100%';
    horizontalLine.style.color = 'black';

    
      
    // Append the fixed items to the iframebody
    iframeBody.appendChild(top_area);
    iframeBody.appendChild(canvas);
    iframeBody.appendChild(scrollableArea);
    iframeBody.appendChild(horizontalLine);
    iframeBody.appendChild(poweredBy);
    iframeBody.appendChild(chat_input);

    
    function clearScrollableArea() {
      // Remove all child elements from the scrollable area
      while (scrollableArea.firstChild) {
        scrollableArea.removeChild(scrollableArea.firstChild);
      }
    }

// add welcome chatbot text
    var container_bot_welcome = document.createElement('div');
    container_bot_welcome.style.fontFamily = 'Arial, sans-serif';
    container_bot_welcome.style.backgroundColor = '#' + headerColor1;
    container_bot_welcome.style.borderTopLeftRadius = '10px';
    container_bot_welcome.style.borderTopRightRadius = '10px';
    container_bot_welcome.style.borderBottomRightRadius = '10px';
    container_bot_welcome.style.color = 'white';
    container_bot_welcome.style.padding = '10px';
    container_bot_welcome.style.marginTop = '0px';
    container_bot_welcome.style.marginBottom = '20px';
    container_bot_welcome.style.marginRight = '60px';
    container_bot_welcome.style.marginLeft = '0px';
    container_bot_welcome.style.textAlign = 'left';
    container_bot_welcome.style.lineHeight = '1.5'; // Adjust the line spacing as needed
      
    var chat_welcome = document.createElement('p');
    chat_welcome.style.margin = '10px';
    var colored_text_welcome = document.createElement('span');
    colored_text_welcome.textContent = welcomeText;
    colored_text_welcome.style.backgroundColor = '#' + headerColor1;
    colored_text_welcome.style.color = 'white';
    colored_text_welcome.style.fontFamily = 'Arial, sans-serif';
    colored_text_welcome.style.borderTopLeftRadius = '10px';
    colored_text_welcome.style.borderTopRightRadius = '10px';
    colored_text_welcome.style.borderBottomRightRadius = '10px';
    colored_text_welcome.style.padding = '0px';
    container_bot_welcome.appendChild(colored_text_welcome);
    scrollableArea.appendChild(container_bot_welcome);

    function sendRequest(userInput) {
      
      // show user input in chat window
      var chat_input_p = document.createElement('p');
      chat_input_p.style.margin = '0px';
      chat_input_p.style.paddingTop = '0px';
      var colored_text_user = document.createElement('span');
      colored_text_user.textContent = `${userInput}`;
      colored_text_user.style.fontFamily = 'Arial, sans-serif';
      colored_text_user.style.backgroundColor = '#' + headerColor2;
      colored_text_user.style.borderTopLeftRadius = '10px';
      colored_text_user.style.borderTopRightRadius = '10px';
      colored_text_user.style.borderBottomLeftRadius = '10px';
      colored_text_user.style.color = 'white';
      colored_text_user.style.padding = '0px';
      chat_input_p.style.textAlign = 'right';
  
      // Set the maximum number of characters per line
      const maxCharsPerLine = 60;
  
      var container_user_text = document.createElement('div');
      container_user_text.style.fontFamily = 'Arial, sans-serif';
      container_user_text.style.backgroundColor = '#' + headerColor2;
      container_user_text.style.borderTopLeftRadius = '10px';
      container_user_text.style.borderTopRightRadius = '10px';
      container_user_text.style.borderBottomLeftRadius = '10px';
      container_user_text.style.color = 'white';
      container_user_text.style.padding = '10px';
      container_user_text.style.marginTop = '20px';
      container_user_text.style.marginBottom = '20px';
      container_user_text.style.marginLeft = '60px';
      container_user_text.style.marginRight = '20px';
      container_user_text.style.textAlign = 'right';
      container_user_text.style.lineHeight = '1.5'; 
      
      // Check the length of the textContent
      if (colored_text_user.textContent.length > maxCharsPerLine) {
        // Insert line breaks at every maxCharsPerLine characters
        colored_text_user.innerHTML = insertLineBreaks(colored_text_user.textContent, maxCharsPerLine);
        
        // Calculate the number of lines and adjust the height and line-height accordingly
        const numLines = Math.ceil(colored_text_user.textContent.length / maxCharsPerLine);
        const lineHeight = 1.5; // You can adjust this value to control the spacing between lines
        const totalHeight = numLines * (parseInt(colored_text_user.style.padding) * 2) + (lineHeight * (numLines - 1));
        
        colored_text_user.style.height = `${totalHeight}px`;
        colored_text_user.style.lineHeight = `${lineHeight}`;
      }
      
      container_user_text.appendChild(colored_text_user);
  
      scrollableArea.appendChild(container_user_text);
  
      var container_bot_text = document.createElement('div');
      container_bot_text.style.fontFamily = 'Arial, sans-serif';
      container_bot_text.style.backgroundColor = '#' + headerColor1;
      container_bot_text.style.borderTopLeftRadius = '10px';
      container_bot_text.style.borderTopRightRadius = '10px';
      container_bot_text.style.borderBottomRightRadius = '10px';
      container_bot_text.style.color = 'white';
      container_bot_text.style.padding = '10px';
      container_bot_text.style.marginTop = '0px';
      container_bot_text.style.marginBottom = '20px';
      container_bot_text.style.marginRight = '60px';
      container_bot_text.style.marginLeft = '0px';
      container_bot_text.style.textAlign = 'left';
      container_bot_text.style.lineHeight = '1.5'; // Adjust the line spacing as needed
      
      
      // make REST API call to get chatbot answer    
      var chat_output = document.createElement('p');
      chat_output.style.margin = '10px';
      
      var chat_answer = getChatbotAnswer(userInput, session_id, uid); 
      
      var colored_text_bot = document.createElement('span');
      var bot_sentence = JSON.parse(chat_answer)['data'];
      
      const words = bot_sentence.split('');
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < words.length) {
            
            colored_text_bot.textContent += words[currentIndex];
            colored_text_bot.style.backgroundColor = '#' + headerColor1;
            colored_text_bot.style.color = 'white';
            colored_text_bot.style.fontFamily = 'Arial, sans-serif';
            colored_text_bot.style.borderTopLeftRadius = '10px';
            colored_text_bot.style.borderTopRightRadius = '10px';
            colored_text_bot.style.borderBottomRightRadius = '10px';
            colored_text_bot.style.padding = '0px';
            container_bot_text.appendChild(colored_text_bot);
            chat_output.appendChild(container_bot_text);
            scrollableArea.appendChild(chat_output);
            currentIndex++;
          } else {
            clearInterval(intervalId);
          }
        }, 50);
      
        scrollableArea.scrollTop = scrollableArea.scrollHeight;
  
      
      // Stop the typing indicator animation after a certain duration
      setTimeout(function() {
        // clearInterval(typingInterval);
        typingIndicator.style.color = 'black';
        typingIndicator.style.visibility = 'hidden'; // Ensure it's hidden at the end
      }, 0); // Duration of 0 milliseconds
  
      
      // Clear the input field
      chat_input.value = '';
    }

    // Add an event listener for ENTER to capture the user input
    chat_input.addEventListener("keydown", function(event) {
      if (event.key == "Enter") {
        sendRequest(event.target.value);
        scrollableArea.scrollTop = scrollableArea.scrollHeight;
      }
    });

    imageSend.addEventListener("click", function(event) {
      if (chat_input.value == '') {
      } else {
      sendRequest(chat_input.value);
      }
    });

    // Append the typing indicator to the iframe's document body
    var iframeBody = iframe.contentDocument.body;
     }
}
}

document.addEventListener("DOMContentLoaded", clairebot);