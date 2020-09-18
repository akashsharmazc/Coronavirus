import React,{useState,useContext,useEffect} from 'react'
import Autosuggest from 'react-autosuggest'
import {GlobalContext} from '../contexts/GlobalState'
import Axios from 'axios'
export const Autosuggestwidget = () => {
  const [value,setvalue]=useState('')
      const [suggestions,setsuggestions]=useState([])
  
   var states
    const {GetData,Buttonclick,isbutton}=useContext(GlobalContext)
    const[languages,setlanguages]=useState([])
      useEffect(() => {
        const fetchdata=async()=>
        {
        const result=await Axios(
          'https://api.covid19india.org/state_district_wise.json',
        );
        states=Object.keys(result.data)
       const language=states.map(ele=>{
           return {name:ele}
       })
       language.shift() 
       setlanguages(language)  
        }
        fetchdata()
      }, []);
      
     async function button(value){
       var obj1={}
var t1=languages.map(ele=>{
  obj1[Object.values(ele)[0]]=true
})
//await GetData(value)
        if(obj1.hasOwnProperty(value))await Buttonclick(value)
        setvalue('')
      }
      // Teach Autosuggest how to calculate suggestions for any given input value.
      const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : languages.filter(lang =>
          lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
      };
     
      // When suggestion is clicked, Autosuggest needs to populate the input
      // based on the clicked suggestion. Teach Autosuggest how to calculate the
      // input value for every given suggestion.
      const getSuggestionValue = suggestion => suggestion.name;
      const onSuggestionSelected=(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })=>{
      setvalue(suggestion.name)
      
    }
      

      // Use your imagination to render suggestions.
      const renderSuggestion = suggestion => (
        <div>
          {suggestion.name}
        </div>
      );
        const onChange = (event, { newValue }) => {
         setvalue(newValue)
        };
      
        // Autosuggest will call this function every time you need to update suggestions.
        // You already implemented this logic above, so just use it.
        const onSuggestionsFetchRequested = ({ value }) => {
          const value1=getSuggestions(value)
            setsuggestions(value1)
    
        };
      
        // Autosuggest will call this function every time you need to clear suggestions.
        const onSuggestionsClearRequested = () => {
            setsuggestions([])
        };
      
      
          // Autosuggest will pass through all these props to the input.
          const inputProps = {
            placeholder: 'Search for a State or City',
            value,
            onChange: onChange
          };
      
          // Finally, render it!
          return (
              
             <div id="Search"> 

             <div id="Search-container">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              onSuggestionSelected={onSuggestionSelected}
            />

            
            </div>
            <div id="Button">
                              <button id="button1" onClick={()=>{button(value)}}>Submit</button>

          </div>
          </div>
          );

}