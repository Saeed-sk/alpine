function numbersCmp() {
    return {
        action: '',
        result: 0,
        selectedNum: 0,
        calculated: false,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        actions: ['+', '-', '*', '/'],
        changeNum(num) {
            if (this.selectedNum === 0) {
                this.selectedNum = num
            } else {
                this.selectedNum = this.selectedNum * 10 + num
            }
        },
        reset() {
            this.selectedNum = 0
            this.action = ''
            this.result = 0
            this.calculated = false
        },
        stepBack() {
            if (this.selectedNum !== 0) {
                this.selectedNum = Math.floor(this.selectedNum / 10)
            }
        },
        changeAction(action) {
            this.calculated = true;

            this.result = this.selectedNum;
            this.action = action;
            this.selectedNum = 0
        },
        calculate() {
            this.calculated = false;
            if (this.action === '-') {
                this.calculated = true;
                this.result = this.result - this.selectedNum
            } else if (this.action === '+') {
                this.calculated = true;
                this.result = this.result + this.selectedNum
            } else if (this.action === '*') {
                this.calculated = true;
                this.result = this.result * this.selectedNum
            } else if (this.action === '/') {
                this.calculated = true;
                this.result = this.result / this.selectedNum
            }
            this.selectedNum = 0;
            this.action = ''
        }
    }
}