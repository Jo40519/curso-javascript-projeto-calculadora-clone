class calcController {
    

    constructor(){
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

    iniitButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach((btn,index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                console.log(btn.className.baseVal.replace('btn-', ''))
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