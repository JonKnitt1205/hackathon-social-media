function hover(element) {
    switch(element.className) {
        case "heart-icon":
            element.setAttribute('src', './assets/icons/hover-heart.svg');
            break;
        case "comment-icon":
            element.setAttribute('src', './assets/icons/hover-comment.svg');
            break;
        default:
            break;
    }
  }
  
  function unhover(element) {
    switch(element.className) {
        case "heart-icon":
            element.setAttribute('src', './assets/icons/heart.svg');
            break;
        case "comment-icon":
            element.setAttribute('src', './assets/icons/comment.svg');
            break;
        default:
            break;
    }
  }