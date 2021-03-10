export default class ImageMapArea {

    constructor(title, href, coords, shape, alt, type) {

        this.title = title;
        this.href = href;
        this.originalCoords = coords.split(',');
        this.newCoords = coords;
        this.shape = shape;
        this.alt = alt;
        this.type = type;
    }
    
}