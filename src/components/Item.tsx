import React from "react";
import "./Item.css"


export interface Item {
    title: string,
    url: string,
    description: string
};


export interface FullItem {
    title: string,
    url: string,
    description: string,
    user: number,
    id: number
};


export class ItemComponent extends React.Component<{item: Item}, {}> {
    private isChecked: boolean = false;

    constructor(props: {item: Item}) {
        super(props);
    };

    render() {
        return (
            <div className={this.isChecked ? "item-container checked" : "item-container"}>
                <h3 className="item-title">{this.props.item.title}</h3>
                <img className="item-image" src={this.props.item.url} alt="" />
                <p className="item-description">{this.props.item.description}</p>
                <div>
                    <button 
                        className="check-button"
                        onClick={() => {
                            this.isChecked = !this.isChecked
                        }}>Прочитать
                    </button>
                </div>
            </div>
        );
    };
};