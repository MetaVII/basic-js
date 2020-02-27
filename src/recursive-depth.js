module.exports = class DepthCalculator {
    constructor() {
        this.maxDepth = 0;
        this.depth = 0;
    }

    calculateDepth(arr) {
        this.depth++;
        this.maxDepth = Math.max(this.maxDepth, this.depth);
        arr.forEach(i => {
            if (Array.isArray(i))
                this.calculateDepth(i)
        });
        this.depth -= 1;
        return this.maxDepth;
    }
};