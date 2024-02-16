import {useEffect, useState} from "react";

const GithubProfileSearch = () => {
    const [userName, setUserName] = useState("sangammukherjee");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleSubmit = () => {
        console.log("username", userName);
    }

    const fetchGithubUserData = async () => {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        if (data) {
            setUserData(data);
            setLoading(false);
        }
        console.log("data", data);

    }

    useEffect(() => {
        fetchGithubUserData();
    }, [userName]);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className={"github-profile-container"}>
            <h1>Github Profile Search</h1>
            <div className={"input-wrapper"}>
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Enter GitHub username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
}
export default GithubProfileSearch;