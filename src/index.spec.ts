import {helloName} from "./index";

describe("index.ts", () => {

    it("should pass", () => {
        const name = "John";
        const result = helloName(name);
        expect(result).toBe("hello, John!");
    })

})