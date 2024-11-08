

function fncScope(a) {
    console.log(arguments);
}

const arrowFncScope = (...mikeyMouse) => {
    console.log(mikeyMouse);
}

fncScope('fncScope param');

arrowFncScope('arrowFncScope param');