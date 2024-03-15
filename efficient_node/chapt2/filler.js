import _ from "lodash";

const filler = (text) => {
    var a = Array(10);
    _.fill(a,text);
    return a;
}

export default filler;