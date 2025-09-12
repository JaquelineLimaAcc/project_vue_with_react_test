import React from "react";

export default function IamReactComponent({greatings, name, question}) {
    return <div>
        <h1>{greatings} {name} from React!</h1>
        <p>{question}</p>
    </div>
}