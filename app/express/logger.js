const regexp = /:(\w+)/g;

format = ':name :value'
const str = format.replace(regexp, (match, property) => {
    return property
});

console.log(str);