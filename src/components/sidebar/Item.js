import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import {Link} from "react-router-dom";

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {

        return (
            <Fragment>
                <li className="nav-item" onClick={this.handleToggle}>
                    <Link to='/' className={classNames({"nav-link": true, collapsed: !this.state.isOpen})}>
                        <i className="ti-home menu-icon"></i>
                        <span className="menu-title">{this.props.item.label}</span>
                        {this.props.item.items && <i className="menu-arrow"></i>}
                    </Link>
                    {this.props.item.items ? (
                        <div className={classNames({"collapse": true, show: this.state.isOpen})} id="editors">
                            <ul className="nav flex-column sub-menu">
                                {this.props.item.items.map((item) => (
                                    <li key={item.name} className="nav-item">
                                        <Link to={item.name} className="nav-link">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : ('')}
                </li>
            </Fragment>
        );
    }
}

export default Item;
