

//lng += lng - prevLng > 180 ? -360 : prevLng - lng > 180 ? 360 : 0;
function antimeridian(data) {

    // if (Array.isArray(elem)) {
    //     for (var i = 0; i < elem.length; i++) {
    //         if (Array.isArray(elem[i][0])) {
    //             this.antimeridian(elem[i]);
    //         } else {
    //             if (elem[i][0] < 0) {
    //                 elem[i][0] = 180 + (180 + elem[i][0]);
    //             }
    //         }
    //     }
    // }
    const elem = JSON.parse(JSON.stringify(data))
    for (var i = 0; i < elem.length; i++) {
        if (elem[i - 1]) {
            elem[i][0] += elem[i][0] - elem[i - 1][0] > 180 ? -360 : elem[i - 1][0] - elem[i][0] > 180 ? 360 : 0;
        }
    }

    console.log('data', data);
    console.log('elem', elem);

    return elem
};