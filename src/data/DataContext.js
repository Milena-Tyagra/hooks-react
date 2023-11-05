import React from "react";

export const data = {
    number: 123,
    text: 'Context API...'
}

const dataContext = React.createContext(null)

export default dataContext