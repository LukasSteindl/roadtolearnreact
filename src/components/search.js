import React from 'react'

const Search = ({children, onChange, searchTerm}) => { return (<form> Search{children} <input type="text" onChange={onChange} value={searchTerm}/></form>)}

export default Search;