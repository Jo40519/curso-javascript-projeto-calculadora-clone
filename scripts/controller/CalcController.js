class calcController {
    

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){

        this.setTimeDisplayNow();
        setInterval( () =>{
        this.setTimeDisplayNow();
        }, 1000)
        
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