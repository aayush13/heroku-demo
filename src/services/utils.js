export const getMultipleRooms = (rooms, units) =>{
    if (units === 1)
        return rooms[0];
    else {
        let listOfRooms = []
        for(let i=0;i<units;i++){
            listOfRooms.push(rooms[i]);
        }
        console.log(listOfRooms);
        return listOfRooms;
    }
}