import { computed, observable } from "mobx"

export default class Todo{
    @observable value
    @observable id
    @observable completed
    
    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.completed = false
    }
}