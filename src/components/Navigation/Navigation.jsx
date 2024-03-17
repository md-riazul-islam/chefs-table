

const Navigation = () => {
    return (
        <div className="flex space-x-4 justify-between p-4 mt-4 items-center">
            <div>
                <h2 className="text-5xl">Recipe Calories</h2>
            </div>
            <div>
                <ul className="flex gap-5"> 
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div>
                <input type="search" name="" id="" placeholder="Search"/>
            </div>
        </div>
    );
};

export default Navigation;