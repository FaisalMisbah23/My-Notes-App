import { useEffect, useState } from "react";

export const Input(){
    const [searchKeyword, setSearchKeyword] = useState('');
    const [data, setData] = useState(null); // Added state for data

    useEffect(() => {
      // Fetch data when the component mounts or when searchKeyword changes
      fetchData();
    }, [searchKeyword]);
  
  

      }
    return(
        <div>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        {/* You can use a button or any other UI element to trigger the search */}
        <button onClick={fetchData}>Search</button>
      </div>
    )
}