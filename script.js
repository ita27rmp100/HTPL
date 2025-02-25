// data 
let vars = {}
let consts = {}
let procedures = {}
//***** DECLARE CLASSES *****//
    // DATA STARUTURE CLASSES
class Var extends HTMLElement {
    connectedCallback() {
        vars[this.getAttribute("var")] = eval(this.getAttribute("value"));
    }
}
class Const extends HTMLElement {
    connectedCallback() {
        consts[this.getAttribute("var")] = eval(this.getAttribute("value"))
    }
}
    // PROGRAMMING NASICS
        // CONDITION STATEMENTS
class Condition extends HTMLElement{
    render(){
        let condition = this.getAttribute("condition");
        let content = this.innerHTML
        this.innerHTML = ''
        if (String(eval(condition))){
            this.innerHTML = content
        }
    }
    connectedCallback(){
        this.render()
    }
    static get ObservedAttributes(){
        return ["condition"]
    }
    attributeChangedCallback(name, oldValue, newValue){
        this.render()
    }
}
        // LOOPS
class Repeate extends HTMLElement{
    connectedCallback(){
        let iHTML = this.innerHTML
        this.innerHTML = ''
        let execute = (n) =>{
            if (n!=0) {
                this.innerHTML += iHTML
                execute(n-1)
            }
        }
        execute(this.getAttribute("times"))
    } 
}
    // MODULES
class Procedure extends HTMLElement {
    connectedCallback() {
        let name = this.getAttribute("name");
        let type = this.getAttribute("type");

        if (!name){
            name="undefined"
        }
        if(!type){
            type = "declare"
        }
        if (type == "declare") {
            procedures[name] = this.innerHTML;
            $(this).find("*").remove()
        } else if (type == "define") {
            if (procedures[name]) {
                this.innerHTML = procedures[name];
            } else {
                this.innerHTML = null ;
            }
        }
    }
}
    // MATH OPERATIONS TAG
class MathCalc extends HTMLElement{
    connectedCallback(){
        if (String(this.getAttribute("lib")) =="true") {
            this.innerHTML = eval("Math."+this.getAttribute("elem")+"("+this.getAttribute('ope')+")")   
        } else {
            this.innerHTML = eval(this.getAttribute('ope'))   
        }
    }
}
    // predefined functions-tags
class Print extends HTMLElement{
    render(){
        let iHTML = this.innerHTML
        this.innerHTML = eval(iHTML)
    }
    connectedCallback(){
        this.render()
    }
    static get ObservedAttributes(){
        return ["condition"]
    }
    attributeChangedCallback(name, oldValue, newValue){
        this.render()
    }
}
class Alert extends HTMLElement{
    connectedCallback(){
        let mode = this.getAttribute("mode") ;
        let txt = this.innerHTML
        this.innerHTML = ''
        if (!$(this).parent().is("[type='declare']")) {
            switch (mode) {
                case "alert":
                    alert(txt)
                    break;
                case "prompt":
                    vars["prompt"]=prompt(txt)
                    break;
                case "confirm":
                    vars["confirm"]=confirm(txt)
                    break;
                default:
                    break;
            }
        }
    }
}

// DEFINE DECLARED TAGS
const tags = {
    // ds
    "use-var":Var,
    "def-const":Const,
    // pb
    "if-condition":Condition,
    "repeate-times":Repeate,
    // mo
    "use-procedure":Procedure,
    // mf
    "math-calc":MathCalc,
    // pre
    "print-eval":Print,
    "new-alrt":Alert
}
for(tag in tags){
    customElements.define(tag,tags[tag])
}