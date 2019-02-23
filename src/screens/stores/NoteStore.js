import { observable, action } from "mobx";
import axios from 'axios'
class NoteStore {
    @observable note = 'Hello';
    @observable note2 = 'Hello2';
    @observable listNotes = [];

    @action
    getNote() {
        
        fetch('http://rallycoding.herokuapp.com/api/music_albums', {
            method: 'GET'
            // headers: {
            //     'ContentType': 'application/json'
            // }
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                // console.log();
                // console.log("listNotes",self.listNotes);
                this.listNotes = json;
                console.log("listNotes",this.listNotes);
            })
            .catch(error => {
                console.log(error);
            })
    }

    @action
    setList(data){
        this.listNotes = data
    }
}

export default NoteStore;