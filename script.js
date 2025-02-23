// data 
let vars = {}
let procedures = {}
// classes
class Var extends HTMLElement{
    connectedCallback(){
        let variable = this.getAttribute("var")
        let value = this.getAttribute("value")
        vars[variable]=eval(value)
    }
}
class Print extends HTMLElement{
    connectedCallback(){
        //let txt = this.getAttribute("txt")
        let content = this.innerText.trim()
        console.log(eval(content))
        this.innerText = eval(content)
    }
}
class Alert extends HTMLElement{
    connectedCallback(){
        let mode = this.getAttribute("mode") ;
        var txt = this.getAttribute("txt")
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
class Condition extends HTMLElement{
    render(){
        let condition = this.getAttribute("condition");
        if (eval(condition)){
            this.innerHTML
            this.hidden = false
            console.log(document.getElementById(this.getAttribute("else")));
            $(`#${this.getAttribute("else")}`).remove()
        }
        else{
            this.hidden = true
            document.getElementById(this.getAttribute("else")).style.display = "block"
            console.log(document.getElementById(this.getAttribute("else")));
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
class NotCondition extends HTMLElement{
    render(){
    }
    connectedCallback(){
        this.render()
    }
    static get ObservedAttributes(){
        return ["style"]
    }
    attributeChangedCallback(name, oldValue, newValue){
        this.render()
    }
}

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
class MathCalc extends HTMLElement{
    connectedCallback(){
        if (String(this.getAttribute("lib")) =="true") {
            this.innerHTML = eval("Math."+this.getAttribute("elem")+"("+this.getAttribute('ope')+")")   
        } else {
            this.innerHTML = eval(this.getAttribute('ope'))   
        }
    }
}
// define tags
const tags = {
    "new-var":Var,
    "print-eval":Print,
    "new-alrt":Alert,
    "if-condition":Condition,
    "if-not":NotCondition,
    "use-procedure":Procedure,
    "math-calc":MathCalc
}
for (tag in tags){
    customElements.define(tag,tags[tag])
}