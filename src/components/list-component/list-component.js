import React from 'react';
import './list-component.css';

class ListComponent extends React.Component {
    render() {
        const { info } = this.props;
        let output = [];
    
        Object.keys(info).map(function(term, index) {
          if (term !== 'id' && term !== 'matching_terms') {
             if (term === 'category') {
              output.unshift(
                <h3  className="h3" style ={{color: "rgb(22, 22, 253)"}} key={index} >{info[term]}</h3>
              );
            } else {
              let value = info[term];
              if (Array.isArray(value)) {
                value = value.join(', ');
              }
    
              if (term === 'date' || term === 'last_contact' || term === 'created' || term === 'timestamp') {
                let date = new Date(value);
    
                date = date.toISOString().substring(0, 10);
                const arr = date.split('-');
                value = arr[1] + '/' + arr[2] + '/' + arr[0];
              }
              
              output.push(
                <div key={index}>  
                  <p style ={{color: "rgb(22, 22, 253)"}} className="list-content"> {term}:</p> 
                  <p className="list-content">{value}</p>
                </div>
              );
            }
          }
          return null;
        })
    
        return (
          <div className="list-container">
            {output}
          </div>
        );
      }
}

export default ListComponent;