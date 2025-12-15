// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    create: jest.fn(() => mockAxios),
    defaults: {
        adapter: {},
        headers: {
            common: {}
        }
    }
};

export default mockAxios;
