// @target: es2017
const f = async function *() {
    var x = { [yield]: 1 };
}