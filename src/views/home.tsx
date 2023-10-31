import React from "react";

const Item=({name, isPacked}:{name:any,isPacked:Boolean})=>{
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}

const App:React.FC=()=>{
    return (
        <div>
            <section>
                <h1>Sally Ride 的行李清单</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="宇航服"
                    />
                    <Item
                        isPacked={true}
                        name="带金箔的头盔"
                    />
                    <Item
                        isPacked={false}
                        name="Tam 的照片"
                    />
                </ul>
            </section>
        </div>
        )

}
export default App

