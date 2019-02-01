// const str = prompt('Enter the equation like this "ax^2+bx+c"');

// function solveQuadrEq(str) {
//     const mas = str.split('+');
//     let a = parseFloat(mas[0]);
//     let b = parseFloat(mas[1]);
//     if (mas[2].length > 1) {
//         let c = mas[2][2];
//     } else {
//         c = mas[2];
//     }
//     if (isNaN(a)) {
//         a = 1;
//     };
//     if (isNaN(b)) {
//         b = 1;
//     };
//     const diskr = b * b - 4 * a * c;
//     if (diskr < 0) {
//         return 'The equation has no solution!'
//     }
//     const res1 = (-b + Math.sqrt(diskr)) / 2 * a;
//     const res2 = (-b - Math.sqrt(diskr)) / 2 * a;
//     return 'x1 = ' + res1 + ', x2 =' + res2;
// }
// alert(solveQuadrEq(str));

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

function solveQuadrEq(a, b, c) {
    const diskr = b * b - 4 * a * c;
    if (diskr < 0) {
        return 'The equation has no solution!';
    }
    const res1 = ((-b + Math.sqrt(diskr)) / 2 * a).toFixed(2);
    const res2 = ((-b + Math.sqrt(diskr)) / 2 * a).toFixed(2);
    if (diskr == 0) {
        return 'x =' + res1;
    } else {
        return 'x1 = ' + res1 + ', x2 =' + res2;
    };
}

alert(solveQuadrEq(a, b, c));