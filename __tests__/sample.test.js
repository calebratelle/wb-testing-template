function giveMeCat(){
    return 'cat'
}

test('giveMeCat return the string of cat', () => {
    expect(giveMeCat()).toBe('cat')
})

test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });