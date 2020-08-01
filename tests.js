// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex! when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" if undefined, true, false, or a number.', function () {
        expect(sayHello()).toBe("Hello, World!");
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
        expect(sayHello(null)).toBe("Hello, World!");
        expect(sayHello(3.4)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World" if the string is empty', function () {
        expect(sayHello("")).toBe("Hello, World!");

    });
    it('should return the string "Hello, World!" if the string contains a number', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" if the input is another data type.', function () {
        expect(sayHello([])).toBe("Hello, World!");
        expect(sayHello(helloWorld)).toBe("Hello, World!");

    })

});

describe("isFive", function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should be a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should be the number 5', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive(4)).toBe(false);
    });
    it('should convert "5" to a number', function () {
       expect(isFive("5")).toBe(true);
    });
});

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should be a boolean', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should be an even number', function () {
        expect(isEven(-4)).toBe(true);
        expect(isEven(3)).toBe(false);
    });
    it('should be a number', function () {
        expect(isEven("8")).toBe(true);
        expect(isEven("banana")).toBe(false);
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
        expect(isEven()).toBe(false);
    });
});