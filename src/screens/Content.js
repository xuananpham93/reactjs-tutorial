import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <h2 className="text-center">Danh sách notes</h2>

                <form action="" className="form-input-note">
                    <input type="text" id="todo" name="todo" className="input-text input-note" placeholder="Nhập note" />

                    <button type="submit" className="btn btn-add-note">Thêm</button>
                </form>
                <div className="clearfix" />
                <div>
                    <ul id="list-notes">
                        <li className="item-note">
                            <div className="title-note">
                                <span>Lên kế hoạch</span>
                            </div>
                            <div className="action-note">
                                <a href="" className="action-edit">Sửa</a>
                                <a href="" className="action-delete">Xóa</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Content;
