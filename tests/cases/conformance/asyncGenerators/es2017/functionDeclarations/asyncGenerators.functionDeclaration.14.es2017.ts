// @target: es2017
async function * f() {
    yield * f();
}