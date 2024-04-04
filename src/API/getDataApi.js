const fetchProfileData = async () => {
    const Id = localStorage.getItem("usr_id")
    try {
      const response = await fetch(`https://admin.allnuud.com/api/profile/${Id}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
    
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message to the user)
    }
  };

  export default fetchProfileData;