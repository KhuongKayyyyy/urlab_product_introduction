import React from 'react'
import Form from "next/form";

import {Search} from "lucide-react";
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query} : {query?:string}) => {
    return (
        <Form action='/' scroll={false} className="search-form font-work-sans font-bold flex items-center gap-2">
            <input 
                type="text" 
                name="query" 
                placeholder="Search product" 
                defaultValue={query} 
                className="flex-grow bg-transparent outline-none"
            />

            <div className="ml-auto flex">
                {query && <SearchFormReset />}
                <span className="mx-2"></span>
                <button type="submit" className="search-btn text-white">
                    <Search size={24} />
                </button>
            </div>
        </Form>
    );
}

export default SearchForm;
