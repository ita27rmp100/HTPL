// data 
let vars = {}
// classes
class Var extends HTMLElement {
    connectedCallback(){
        let variable = this.getAttribute("var")
        let value = this.getAttribute("value")
        vars[variable] = eval(value)
    }
}
class Print extends HTMLElement {
    connectedCallback() {
        let txt = this.getAttribute("txt")
        this.innerHTML = eval(txt)
    }
}
class Alert extends HTMLElement {
    connectedCallback() {
        let mode = this.getAttribute("mode") ;
        let txt = this.getAttribute("txt")
        switch (mode) {
            case "alert":
                alert(txt)
                break;
            case "prompt":
                vars["prompt"] = prompt(txt)
                break;
            case "confirm":
                vars["confirm"] = confirm(txt)
                break;
            default:
                break;
        }
    }
}
class Condition extends HTMLElement {
    render() {
        let condition = this.getAttribute("condition");
        if (eval(condition)) {
            this.innerHTML
            this.hidden = false
        }
        else {
            this.hidden = true
        }
    }
    connectedCallback() {
        this.render()
    }
    static get ObservedAttributes() {
        return ["condition"]
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.render()
    }
}
class CreateFunction extends HTMLElement {
    connectedCallback() {
        let create = this.getAttribute("create")
        if (create!=undefined) {
            this.hidden = true
        }
    }
}
class ImportFunction extends HTMLElement {
    connectedCallback() {
        this.innerHTML = document.getElementById(this.id).innerHTML
    }
}
class MathCalc extends HTMLElement {
    connectedCallback() {
        let element = this.getAttribute("elem")
        let opp = this.getAttribute('opp')
        this.innerHTML = eval("Math."+element+"("+opp+")")
    }
}
// define tags
const tags = {
    "new-var":Var,
    "print-eval":Print,
    "alert-thing":Alert,
    "if-condition":Condition,
    "new-function":CreateFunction,
    "import-function":ImportFunction,
    "math-calc":MathCalc
}
for (let tag in tags) {
    customElements.define(tag,tags[tag])
}
