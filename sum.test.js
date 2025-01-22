test("Mock implementation of a basic function",() => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43)
})