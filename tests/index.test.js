const { alphabetWar } = require("../src/index");

test("should return 'right side wins' if parameter is equal to 'z'", () => {
    expect(alphabetWar("z")).toBe("Right side wins!");
});

test("should return 'left side wins' if parameter is equal to 'wwwwwwz'", () => {
    expect(alphabetWar("wwwwwwz")).toBe("Left side wins!");
});

test("should return 'let's fight again' if parameter is equal to 'zdqmwpbs'", () => {
    expect(alphabetWar("zdqmwpbs")).toBe("Let's fight again!");
});