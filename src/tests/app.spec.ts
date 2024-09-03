import config from "../config/config";

describe("Test1", () => {
    it("should be correct", () => {
        expect(200).toBe(200);
        expect(5001).toBe(Number(config.PORT));
    })
})