import * as React from "react";

import {Simple} from  '../types/interfaces/simple';

export const SimpleAdd = (props: Simple) =>{
    return( <div>
        <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.name}</a>
    </div>)
}
