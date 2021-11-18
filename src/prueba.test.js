const Jest= require (".");

test ('suma Jest', () => {
    const result = Jest.suma(1, 3);
    expect(result).toBe(4);
    });
    test ('resta Jest', () => {
        const result = Jest.resta (1, 3);
        expect(result).toBe(-2);
        });
    test.todo ("resta Jest");
test.todo ("mayor Jest");