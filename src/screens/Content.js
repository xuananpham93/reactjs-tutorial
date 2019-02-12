import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listNotes: [
                'Lên kế hoạch'
            ],
            txtNote: '',
            txtEdit: '',
            indexEdit: null,
            open: false,
        }
    }

    onInputChange = (e) => {
        this.setState({
            txtNote: e.target.value
        });
    }

    onTextEditChange = (e) => {
        this.setState({
            txtEdit: e.target.value
        });
    }

    onAddNote = (e) => {
        e.preventDefault();
        let listNotes_new = [...this.state.listNotes];

        listNotes_new.push(this.state.txtNote);

        this.setState({
            listNotes: listNotes_new,
            txtNote: ''
        });
    }

    onDeleteNote = (index) => {
        let listNotes_new = [...this.state.listNotes];

        listNotes_new.splice(index, 1);

        this.setState({
            listNotes: listNotes_new
        });
    }

    onEditNote = (e) => {
        e.preventDefault();

        let listNotes_new = [...this.state.listNotes];

        listNotes_new[this.state.indexEdit] = this.state.txtEdit;

        this.setState({
            listNotes: listNotes_new,
            indexEdit: null,
            txtEdit: '',
            open: false
        });
    }

    onOpenModal = (txtEdit, index) => {
        this.setState({
            open: true,
            txtEdit: txtEdit,
            indexEdit: index
        }, () => {
            this.refs.inputEdit.focus();
        });
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    renderNotes = () => {
        if (this.state.listNotes.length === 0) {
            return null;
        }

        return this.state.listNotes.map((item, index) => {
            return (
                <li className="item-note" key={index}>
                    <div className="title-note">
                        <span>{item}</span>
                    </div>
                    <div className="action-note">
                        <a href="javascript:void(0)" onClick={() => this.onOpenModal(item, index)} className="action-edit">Sửa</a>
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

                <form onSubmit={this.onAddNote} className="form-input-note">
                    <input type="text" name="todo" className="input-text input-note" placeholder="Nhập note" required value={this.state.txtNote} onChange={this.onInputChange} />

                    <button type="submit" className="btn btn-add-note">Thêm</button>
                </form>
                <div className="clearfix" />
                <div>
                    <ul id="list-notes">
                        {this.renderNotes()}
                    </ul>
                </div>

                <Modal open={this.state.open} onClose={this.onCloseModal}>
                    <form onSubmit={this.onEditNote} className="form-input-note-edit">
                        <input ref="inputEdit" type="text" name="todo" className="input-text input-note-edit" placeholder="Sửa note" required value={this.state.txtEdit} onChange={this.onTextEditChange} />

                        <button type="submit" className="btn btn-add-note">Sửa</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Content;
