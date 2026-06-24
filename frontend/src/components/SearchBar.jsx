function SearchBar({ search, setSearch }) {

    return (

        <div className="max-w-4xl mx-auto my-10">

            <input

                type="text"

                placeholder="Search skills..."

                value={search}

                onChange={(e) => setSearch(e.target.value)}

                className="w-full border rounded-lg p-4"

            />

        </div>

    );

}

export default SearchBar;