var Colors;
(function (Colors) {
    Colors["AKIRA"] = "white";
    Colors["MORGANA"] = "black";
    Colors["BENTO"] = "black and white";
})(Colors || (Colors = {}));
const name1 = {
    name: "Akira",
    age: 3,
    favouriteColor: Colors.AKIRA
};
const name2 = {
    name: "Morgana",
    age: 3,
    favouriteColor: Colors.MORGANA
};
const name3 = {
    name: "Bento",
    age: 3,
    favouriteColor: Colors.BENTO
};
console.table([name1, name2, name3]);
//# sourceMappingURL=index.js.map