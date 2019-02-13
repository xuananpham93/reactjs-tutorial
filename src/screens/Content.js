import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listNotes: [
                'Giang Cave',
                'Len ke hoach'
            ],
            txtAddNote: '',
            open: false,
        }
    }

    onAddNoteChange = (e) => {
        this.setState({
            txtAddNote: e.target.value
        });
    }

    onAddNoteSubmit = (e) => {
        e.preventDefault();

        let listNotes_new = [...this.state.listNotes];

        listNotes_new.push(this.state.txtAddNote);

        this.setState({
            listNotes: listNotes_new,
            txtAddNote: '',
            txtEditNote: '',
            indexEdit: null
        });
    }

    onDeleteNote = (index) => {
        let listNotes_new = [...this.state.listNotes];

        listNotes_new.splice(index, 1);

        this.setState({
            listNotes: listNotes_new
        });
    }

    onEditNoteClick = (name, index) => {
        this.onOpenModal();

        this.setState({
            txtEditNote: name,
            indexEdit: index
        }, () => {
            this.refs.inputEdit.focus();
        });

    }

    onEditNoteChange = (e) => {
        this.setState({
            txtEditNote: e.target.value
        })
    }

    onEditNoteSubmit = (e) => {
        e.preventDefault();
        let listNotes_new = [...this.state.listNotes];

        listNotes_new[this.state.indexEdit] = this.state.txtEditNote;

        this.setState({
            listNotes: listNotes_new,
            txtEditNote: ''
        });

        this.onCloseModal();
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    renderNotes = () => {
        return this.state.listNotes.map((item, index) => {
            return (
                <li className="item-note" key={index}>
                    <div className="title-note">
                        <span>{item}</span>
                    </div>
                    <div className="action-note">
                        <a href="javascript:void(0)" className="action-edit" onClick={() => this.onEditNoteClick(item, index)}>Sửa</a>
                        <a href="javascript:void(0)" onClick={() => this.onDeleteNote(index)} className="action-delete">Xóa</a>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="Content">
                <h2 className="text-center">Danh sách notes</h2>

                <form onSubmit={this.onAddNoteSubmit} className="form-input-note">
                    <input type="text" id="todo" name="todo" className="input-text input-note" required placeholder="Nhập note" onChange={this.onAddNoteChange} value={this.state.txtAddNote} />

                    <button type="submit" className="btn btn-add-note">Thêm</button>
                </form>
                <div className="clearfix" />
                <div>
                    <ul id="list-notes">
                        {this.renderNotes()}
                    </ul>
                </div>

                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <form onSubmit={this.onEditNoteSubmit} className="form-input-note">
                        <input type="text" id="todo" name="todo" className="input-text input-note" required placeholder="Nhập note" onChange={this.onEditNoteChange} value={this.state.txtEditNote}
                            // autoFocus
                            ref="inputEdit"
                        />

                        <button type="submit" className="btn btn-add-note">Sửa</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Content;
