import React from "react";

const List = ({people}) => {
    return (
        <>
            {people.map((person)=>{
                const { id, name, age} = person;
                return (
                    <div key={id} className="col-md-12 bg-dark">
                        <div className="p-0">
                            <h4 className="text-white">{name}</h4>
                            <p className="text-white">{age} years</p>
                        </div>

                    </div>
                );
            })}
        </>

    );
}
export default List;