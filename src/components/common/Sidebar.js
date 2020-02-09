import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: [],
            items: [],
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {

        this.setState({
            items: [
                {name: "dashboard", label: "Dashboard", route: '/dashboard'},
                {
                    name: "user",
                    label: "User",
                    items: [
                        {name: "users", label: "Users", route: '/users'},
                        {name: "createUser", label: "Create User", route: '/users/create'},
                    ]
                },
            ]
        });

        this.state.items.map((item) => {
            this.setState({[item.name]: false});
        });
    }


    handleToggle = (name) => {
        this.state.items.map((item) => {
            if (item.name === name) {
                this.setState({
                    [name]: !this.state[name]
                });
            } else {
                this.setState({[item.name]: false});
            }
        });
    };

    render() {
        return (
            <Fragment>
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav ps ps--active-y">
                        {this.state.items.map((item) => (
                            <li key={item.name} className="nav-item">
                                <Link to={item.route || '#'} className={classNames({
                                    "nav-link": true,
                                    collapsed: !this.state[item.name]
                                })} onClick={() => this.handleToggle(item.name)}>
                                    <i className="ti-home menu-icon"></i>
                                    <span className="menu-title">{item.label}</span>
                                    {item.items && <i className="menu-arrow"></i>}
                                </Link>
                                {item.items ? (
                                    <div className={classNames({"collapse": true, show: this.state[item.name]})}
                                         id="editors">
                                        <ul className="nav flex-column sub-menu">
                                            {item.items.map((item) => (
                                                <li key={item.name} className="nav-item">
                                                    <Link to={item.route} className="nav-link">
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : ('')}
                            </li>

                        ))}
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default Sidebar;
