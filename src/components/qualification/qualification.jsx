import React from "react";
import '../qualification/qualification.scss'

function Designer(props) {
    return <li>{ props.talent }</li>;
}

function Coder(props){
    return <li>{props.language}</li>
}

function Qualification() {
    const designers = [
        {id: 1, talent: 'Website & UI Design'},
        {id: 2, talent: 'Figma & Prototyping'},
        {id: 3, talent: 'Making Things Flow'},
        {id: 4, talent: 'Creating Clean Aesthetics'}
      ];
    const coders = [
        {id: 1, language: 'Frontend Development (React)'},
        {id: 2, language: 'JavaScript & AI Logic'},
        {id: 3, language: 'Debugging Like a Detective'},
        {id: 4, language: 'Teaching & Explaining Concepts'}
    ]
  return (
    <>
    <div className="qualification">
        <h2>Part Designer</h2>
        <ul>{designers.map((designer) => <Designer key={designer.id} talent={designer.talent} />)}</ul>  
    </div>
    <div className="languages">
    <h2>Part Coder</h2>
        <ul>{coders.map((coder) => <Coder key={coder.id} language={coder.language} />)}</ul>  
    </div>
    </>
  )
}

export default Qualification