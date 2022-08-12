import React from 'react'

function ListItems(props) {
  return (
    <div>
      {(props.footItem).map((
        
      ) =>{
        return(
            <div className="FooterItems"><a href={footerItems.url}>{footerItems.item}</a></div>
        )
      })}
    </div>
  )
}

export default ListItems
