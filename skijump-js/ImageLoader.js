

const ImageLoader = {
  
  load: (imageName) => {
    const path = 'graphics/' + imageName;
    return loadImage(path);
  }

}