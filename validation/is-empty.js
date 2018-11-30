// const isEmpty = value => {
//     console.log("111111111111", value);
//     value === undefined ||
//         value === null ||
//         (typeof value === "object" && Object.keys(value).length === 0) ||
//         (typeof value === "string" && value.trim().length === 0);
    
// }
    
function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

module.exports = isEmpty;
