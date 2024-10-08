function myComponent(startName) {
    return {
        myName: startName,
        sayMyName() {
            alert('your name is ' + this.myName);
        }
    }
}