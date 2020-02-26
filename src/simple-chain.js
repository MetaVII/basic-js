const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.chain.length || isNaN(position)) {
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        const ret = this.chain.join('~~');
        this.chain = [];
        return ret;
    }
};

module.exports = chainMaker;
