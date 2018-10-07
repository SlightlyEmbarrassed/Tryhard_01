function adjustBackgroundImg() {
  
  console.log("testing...");

  let page_height = document.page_height;
  let page_width = document.page_width;
  let img = new Image();
  img.src = document.body.style.background;
  let img_height = img.height;
  let img_width = img.width;

  console.log(page_height);
  console.log(page_width);
  console.log(img_height);
  console.log(img_width);

}