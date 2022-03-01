class calcController {
    

    constructor(){
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.iniitButtonsEvents();
    }

    initialize(){

        this.setTimeDisplayNow();
        setInterval( () =>{
        this.setTimeDisplayNow();
        }, 1000)
        
    }
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }
    clearAll(){
        this._operation = []

    }

    clearEntry(){
        this._operation.pop()

    }

    addOperation(value){
        this._operation.push(value)
    }

    setError(){
        this.displayCalc = "Error"
    }

        execBtn(value){
            switch(value){
                case 'ac':
                this.clearAll();
                break;
                case 'ce':
                this.clearEntry();
                break;
                case 'soma':
                this.addOperation();
                break;
                case 'subtracao':
                this.addOperation();
                break;
                case 'multiplicacao':
                this.addOperation();
                break;
                case 'divisao':
                this.addOperation();
                break;
                case 'porcento':
                this.addOperation();
                break;
                case 'igual':
                this.addOperation();
                break;

                default: 
                this.setError()
                break;
            }
        }

    iniitButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach((btn,index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace('btn-', '')
                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer"
            })
        })
        
    }

    setTimeDisplayNow(){
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day:'2-digit', month: 'long', year: 'numeric'})
    }


    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value
    }




    get displayDate(){
        this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value
    }





    get displayCalc(){
        return this._displayCalEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalEl.innerHTML = valor
    }






    get currentDate(){
    return new Date();
    }

    set dataAtual(valor){
        this.currentDate = valor
    }
}