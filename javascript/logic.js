const record = (title, priority) => {
    if(!title || title.trim() === ""){
        return null;
    }
    return{
        title : title.trim(), 
        priority,
        completed : false,
    };

};

export {record};