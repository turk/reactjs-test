import React, {Component, Fragment} from 'react';
import Item from '../sidebar/Item';
class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };


    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const items = [
            { name: "dashboard", label: "Dashboard" },
            {
                name: "user",
                label: "User",
                items: [
                    { name: "users", label: "Users" },
                    { name: "createUser", label: "Create User" },
                ]
            },
        ];
        return (
            <Fragment>
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav ps ps--active-y">
                        {items.map((item, index) => (
                           <Item key={index} item={item}/>
                        ))}
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default Sidebar;
