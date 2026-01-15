// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: { 'test': 'test' } })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    create: jest.fn(() => mockAxios),
    defaults: {
        adapter: {},
        headers: {
            common: {}
        }
    },
    interceptors: {
        response: {
            use: jest.fn(),
        },
        request: {
            use: jest.fn(),
        }
    }
};

export default mockAxios;
