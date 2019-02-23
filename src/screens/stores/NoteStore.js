import { observable, action } from "mobx";

class NoteStore {
    @observable note = 'Hello';
    @observable listNote = [];

    @action
    getNote = () => {
        fetch('https://crudnodejs-hitex.herokuapp.com/api/findAllNotes', {
            method: 'GET',
            headers: {
                'ContentType': 'application/json'
            },
            mode: 'no-cors'
        })
            .then(response => {
                console.log(response.type);
                return response.json();
            })
            .then(json => {
                console.log(json);
                this.listNote = json.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default NoteStore;