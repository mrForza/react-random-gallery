import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { ListComponent } from "./components/List"
import { Item } from "./components/Item";
import { PaginationComponent} from "./components/Pagination"

const App = () => {
    const [data, setData] = useState<Array<Item>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, _] = useState(8);

    useEffect(() => {
        const fillData = async () => {
            const response = await axios.get(
                "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=30"
            );
            var shortItems: Array<Item> = [];
            for (var i = 0; i < response.data.photos.length; ++i) {
                shortItems.push({
                    title: response.data.photos[i].title,
                    url: response.data.photos[i].url,
                    description: response.data.photos[i].description
                })
            };
            console.log(shortItems)
            setData(shortItems);
        };
    
        fillData();
    }, []);

    const lastPostIndex = currentPage * perPage;
    const firstPostIndex = lastPostIndex - perPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>Random Gallery</h1>
            <PaginationComponent 
                totalItems={data.length}
                perPage={perPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <ListComponent data={currentPosts} />
        </div>
    );
};

export default App;