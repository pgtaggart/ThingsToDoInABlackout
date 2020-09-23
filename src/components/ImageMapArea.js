export default class ImageMapArea {

    constructor(title, href, coords, shape, target) {

        this.title = title;
        this.href = href;
        this.originalCoords = coords.split(',');
        this.newCoords = coords;
        this.shape = shape;
        this.target = target;
    }
    
}