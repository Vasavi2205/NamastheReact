import { useState } from "react";
import { restrautList } from "../configs";


const Search=()=>{
    const [searchText, setSearchText] = useState('')
    const [restaurants, setRestaurants] = useState(restrautList);
    // const filterDataValue =  restrautList.filter((restaurant) =>
    //       restaurant.data

    //       )

    console.log(filterData)

    function filterData(searchText, restaurants) {
          if(searchText == ""){
            return restrautList;
          }else{
            const filterData = restaurants.filter((restaurant) =>
            restaurant.data.name.includes(searchText)

            )

            return filterData;
          }

          }

return(
    <><input
        type="text"
        placeholder="Burger"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
    ></input><button
        className="search-btn"
        // onClick={() => {

        //     const data = filterData(searchText,restaurants)
        //     setRestaurants(data);
        // }}
    >
            Search
        </button></>
)
}
