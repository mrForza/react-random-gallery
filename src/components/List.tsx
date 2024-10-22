import { Item } from "./Item"
import { ItemComponent } from "./Item"
import "./List.css"


export interface List {
    data: Array<Item>
};


export const ListComponent = ({data}: List) => {
    return (
        <div className="list-container">
            {data.map((item) => <ItemComponent item={item}/>)}
        </div>
    );
};