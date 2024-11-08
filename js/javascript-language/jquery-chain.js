function KQuery(selector) {

    this.element = document.querySelector(selector);

    if (!this.element) {
        throw new DOMException("$('"+ selector +"') can't select any element");
    };

    this.setText = function(text) {
        this.element.innerText = text;
        return this;
    }

    this.highlight = function() {
        this.element.style.backgroundColor = 'yellow';
        return this;
    }

}

const $k = new KQuery('#kquery').setText('K Query').highlight();


