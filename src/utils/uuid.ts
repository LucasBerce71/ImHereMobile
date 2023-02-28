function uuid(maxRandom?: number) {
    const maxRandomParameter = maxRandom || 10;
    const id = Math.floor(Math.random() * maxRandomParameter);

    return id;
};

export default uuid;