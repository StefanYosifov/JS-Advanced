function getArticleGenerator(articles) {
  let divElement = document.getElementById("content");
  let sizeOfArticleArr = articles.length;

  return function articleAppender() {
    if (sizeOfArticleArr > 0) {
      for (let article of articles) {
        if (article !== undefined) {
          let articleElement = document.createElement("article");
          articleElement.textContent = article;
          divElement.appendChild(articleElement);
          sizeOfArticleArr--;
        }
      }
    }
  };
}
