export const getMultipleRooms = (rooms, units) =>{
    let listOfRooms = [];
    if (units === 1){
        listOfRooms.push(rooms[0]);
    }else {
        for(let i=0;i<units;i++){
            listOfRooms.push(rooms[i]);
        }
        console.log(listOfRooms);
    }
    return listOfRooms;
}