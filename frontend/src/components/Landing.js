import React, {useEffect, useState} from 'react';

function Landing() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/landing');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.msg}</p>
                </div>
            ))
            }
        </section>
    );
}

export default Landing;