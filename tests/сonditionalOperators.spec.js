describe('On Multiplication or sum', () => {
    it('should mult',() => {
        expect(mult(2, 2)).to.equal(4);
    });

    it('should sum', () => {
        expect(mult(1, 5)).to.equal(6);
    });
});
    
    
    describe('On chois quarter', () => {
        it('should return 1 quarter', () => {
            expect(s(3, 2)).to.equal("Первая четверть");
        });

        it('should return 2quarter', () => {
            expect(s(1, -2)).to.equal("Вторая четверть");
        });
        it('should return 3 quarter', () => {
            expect(s(-1, -2)).to.equal("Третья четверть");
        });
        it('should return 4 quarter', () => {
            expect(s(-1, 2)).to.equal("Четвертая четверть");
        });
        it('should return cener', () => {
            expect(s(0, 0)).to.equal("Центр координат");
        });
    });

    describe('On chois quarter', () => {
        it('should sum only pos', () => {
            expect(sumOfPosNum(3, 2,-2)).to.equal(5);
        });
        it('should sum only pos', () => {
            expect(sumOfPosNum(3, -1, 1)).to.equal(4);
        });
        it('should sum only pos', () => {
            expect(sumOfPosNum(-3, 2,5)).to.equal(7);
        });
        it('should sum only pos', () => {
            expect(sumOfPosNum(-3, -2,-5)).to.equal(0);
        });
        it('should sum only pos', () => {
            expect(sumOfPosNum(3, -2,-5)).to.equal(0);
        });
        it('should sum only pos', () => {
            expect(sumOfPosNum(3, 2,5)).to.equal(10);
        });
    });
    
    
